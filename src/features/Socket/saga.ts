import { eventChannel } from "redux-saga";
import { call, cancel, fork, put, race, take } from "redux-saga/effects";
import { Socket, io } from "socket.io-client";

import { Env } from "src/constants";

import { connectSocket } from "./slice";
import { logout } from "src/features/Auth/slice";
import { appendMessage, sendMessageToSocket } from "src/features/Chat/slice";
import { increaseUnviewedNotificationCount } from "src/features/Notifications/slice";

// https://github.com/kuy/redux-saga-chat-example

const Event = {
  NEW_USER: "new-user",
  NEW_MESSAGE: "new-message",
  NEW_NOTIFICATION: "new-notification",
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
  return eventChannel((emit) => {
    socket.on(Event.NEW_MESSAGE, (data) => {
      emit(appendMessage(data));
    });

    socket.on(Event.NEW_NOTIFICATION, () => {
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

function* write(socket: Socket) {
  while (true) {
    const { sendMessage } = yield race({
      sendMessage: take(sendMessageToSocket.type),
    });

    if (sendMessage) {
      socket.emit(Event.NEW_MESSAGE, sendMessage.payload);
    }
  }
}

function* handleIO(socket: Socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* connectSocketSaga(): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take(connectSocket.type);
    const socket = yield call(connect);
    socket.emit(Event.NEW_USER, payload);

    const task = yield fork(handleIO, socket);

    const action = yield take(logout.type);
    yield cancel(task);

    socket.emit("logout");
  }
}

export default function* socketSaga() {
  yield fork(connectSocketSaga);
}
