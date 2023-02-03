import io, { Socket } from "socket.io-client";
import { eventChannel } from "redux-saga";
import { Env } from "src/constants";
import { call, cancel, fork, put, take } from "redux-saga/effects";

// https://github.com/kuy/redux-saga-chat-example

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
    socket.on("evt1", (data) => {
      emit("action1");
    });

    socket.on("evt2", (data) => {
      emit("action2");
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
    const { payload } = yield take("action");
    socket.emit("evt", payload);
  }
}

function* handleIO(socket: Socket) {
  yield fork(read, socket);
  yield fork(write, socket);
}

function* flow(): Generator<any, any, any> {
  while (true) {
    const { payload } = yield take("login action");
    const socket = yield call(connect);

    socket.emit("login evt", { username: payload.username });

    const task = yield fork(handleIO, socket);
    const action = yield take("logout");

    yield cancel(task);

    socket.emit("logout");
  }
}

export default function* socketSaga() {
  yield fork(flow);
}
