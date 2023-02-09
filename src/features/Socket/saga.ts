import { eventChannel } from "redux-saga";
import { call, cancel, fork, put, race, take } from "redux-saga/effects";
import { Socket, io } from "socket.io-client";

import { Env } from "src/constants";

import { connectSocket } from "./slice";
import { logout } from "src/features/Auth/slice";
import {
  addUserToSocket,
  getMessageFromSocket,
  sendMessageToSocket,
} from "src/features/Chat/slice";

// https://github.com/kuy/redux-saga-chat-example

const Event = {
  NEW_USER: "new-user",
  NEW_MESSAGE: "new-message",
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
    // socket.on("GET_USERS", (data) => {
    //   // console.log("GET_USERS", data);
    //   emit({ type: "GET_USERS" });
    // });

    socket.on(Event.NEW_MESSAGE, (data) => {
      emit(getMessageFromSocket(data));
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
    const { addUser, sendMessage } = yield race({
      addUser: take(addUserToSocket.type),
      sendMessage: take(sendMessageToSocket.type),
    });

    if (addUser) {
      socket.emit(Event.NEW_USER, addUser.payload);
    }

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
    // socket.emit("login evt", { username: payload.username });

    const task = yield fork(handleIO, socket);

    const action = yield take(logout.type);

    yield cancel(task);

    socket.emit("logout");
  }
}

export default function* socketSaga() {
  yield fork(connectSocketSaga);
}
