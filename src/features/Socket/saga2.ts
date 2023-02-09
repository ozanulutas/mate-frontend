// @ts-nocheck
import { take, put, call, apply, delay, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import { Socket, io } from "socket.io-client";
import { Env } from "src/constants";

function createWebSocketConnection() {
  const socket = io(Env.SOCKET_URL);

  return new Promise((resolve) => {
    socket.on("connect", () => {
      resolve(socket);
    });
  });
}

function createSocketChannel(socket) {
  return eventChannel((emit) => {
    socket.on("GET_USERS", (event) => {
      console.log("GET_USERS", event);

      emit({ type: "GET_USERS", event });
    });

    socket.on("error", (errorEvent) => {
      emit(new Error(errorEvent.reason));
    });

    const unsubscribe = () => {
      // socket.off("ping", pingHandler);
      socket.disconnect();
    };

    return unsubscribe;
  });
}

function* pong(socket) {
  yield apply(socket, socket.emit, ["pong"]); // call `emit` as a method with `socket` as context
}

export function* connectSocketSaga() {
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    try {
      // An error from socketChannel will cause the saga jump to the catch block
      const payload = yield take(socketChannel);
      console.log("payload", payload);

      yield put({ type: payload.type, payload: payload.event.payload });
      yield fork(pong, socket);
    } catch (err) {
      console.error("socket error:", err);
      // socketChannel is still open in catch block
      // if we want end the socketChannel, we need close it explicitly
      // socketChannel.close()
    }
  }
}

export default function* socketSaga() {
  yield takeEvery("CONNECT_SOCKET", connectSocketSaga);
}
