import { eventChannel } from "redux-saga";
import { call, cancel, fork, put, take } from "redux-saga/effects";
import { matchPath } from "react-router";
import { Socket, io } from "socket.io-client";

import { Env, FriendshipRemoveAction } from "src/constants";

import { connectSocket } from "./slice";
import { logout } from "src/features/Auth/slice";
import { appendMessage, updateUnreadChatInfo } from "src/features/Chat/slice";
import {
  getNotificationsRequest,
  increaseUnviewedNotificationCount,
} from "src/features/Notifications/slice";
import { Path } from "src/router/path";
import {
  decreaseFriendshipRequestsCount,
  getFriendshipRequestsRequest,
  increaseFriendshipRequestsCount,
} from "../Friendship/slice";
import { setFriendshipInfo } from "../Profile/slice";

// https://github.com/kuy/redux-saga-chat-example

const SocketEvent = {
  NEW_USER: "new-user",
  NEW_MESSAGE: "new-message",
  NEW_NOTIFICATION: "new-notification",
  NEW_FRIENDSHIP_REQUEST: "new-friendship-request",
  FRIENDSHIP_REMOVED: "friendship-removed",
  FRIENDSHIP_STATUS_CHANGED: "friendship-status-changed",
};

function connect() {
  const socket = io(Env.SOCKET_URL);

  return new Promise((resolve) => {
    socket.on("connect", () => {
      resolve(socket);
    });
  });
}

function subscribe(socket: Socket) {
  // @TODO: move handlers to saga funcs
  return eventChannel((emit) => {
    socket.on(SocketEvent.NEW_MESSAGE, (data) => {
      const path = window.location.pathname;
      const chatPath = matchPath({ path: Path.CHAT }, path);

      if (chatPath && data.sender.id === +chatPath.params.peerId!) {
        emit(appendMessage(data));
      }

      if (
        !chatPath ||
        (chatPath && data.sender.id !== +chatPath.params.peerId!)
      ) {
        emit(
          updateUnreadChatInfo({
            peerId: data.sender.id,
            incrementBy: 1,
            text: data.text,
          })
        );
      }
    });

    socket.on(SocketEvent.NEW_FRIENDSHIP_REQUEST, (friendshipData) => {
      const path = window.location.pathname;
      const profilePath = matchPath({ path: Path.PROFILE }, path);
      const friendshipRequestsPath = matchPath(
        { path: Path.FRIENDSHIP_REQUESTS },
        path
      );

      if (friendshipRequestsPath) {
        emit(getFriendshipRequestsRequest());
        return;
      }

      if (profilePath?.params.userId === friendshipData.senderId.toString()) {
        emit(setFriendshipInfo(friendshipData));
      }

      emit(increaseFriendshipRequestsCount(1));
    });

    socket.on(SocketEvent.FRIENDSHIP_REMOVED, (friendshipData) => {
      const path = window.location.pathname;
      const profilePath = matchPath({ path: Path.PROFILE }, path);
      const friendshipRequestsPath = matchPath(
        { path: Path.FRIENDSHIP_REQUESTS },
        path
      );
      const { senderId, removeAction } = friendshipData;

      if (profilePath?.params.userId === senderId.toString()) {
        emit(setFriendshipInfo(null));
      }

      if (removeAction === FriendshipRemoveAction.CANCEL) {
        friendshipRequestsPath
          ? emit(getFriendshipRequestsRequest())
          : emit(decreaseFriendshipRequestsCount(1));
      }

      console.log(friendshipData);
    });

    socket.on(SocketEvent.FRIENDSHIP_STATUS_CHANGED, (friendshipData) => {
      const path = window.location.pathname;
      const profilePath = matchPath({ path: Path.PROFILE }, path);

      if (profilePath?.params.userId === friendshipData.receiverId.toString()) {
        emit(setFriendshipInfo(friendshipData));
      }
    });

    socket.on(SocketEvent.NEW_NOTIFICATION, () => {
      const path = window.location.pathname;
      const notificationsPath = matchPath({ path: Path.NOTIFICATIONS }, path);

      if (notificationsPath) {
        emit(getNotificationsRequest());
        return;
      }

      emit(increaseUnviewedNotificationCount(1));
    });

    socket.on("disconnect", (e) => {
      // TODO: handle
    });

    return () => {};
  });
}

function* read(socket: Socket): Generator<any, any, any> {
  const channel = yield call(subscribe, socket);

  while (true) {
    const action = yield take(channel);
    yield put(action);
  }
}

// function* write(socket: Socket) {
//   while (true) {
//     const { sendMessage } = yield race({
//       sendMessage: take(sendMessageToSocket.type),
//     });

//     if (sendMessage) {
//       socket.emit(SocketEvent.NEW_MESSAGE, sendMessage.payload);
//     }
//   }
// }

function* handleIO(socket: Socket) {
  yield fork(read, socket);
  // yield fork(write, socket);
}

function* connectSocketSaga(): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take(connectSocket.type);
    const socket = yield call(connect);
    socket.emit(SocketEvent.NEW_USER, payload);

    const task = yield fork(handleIO, socket);

    const action = yield take(logout.type);
    yield cancel(task);

    socket.emit("logout");
  }
}

export default function* socketSaga() {
  yield fork(connectSocketSaga);
}
