import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";

export function* handleRequest<
  Func extends (...args: any[]) => Promise<AxiosResponse>,
  Handler extends ActionCreatorWithOptionalPayload<any>
>(
  handlers: {
    success: Handler;
    error: Handler;
  },
  requestFunc: Func,
  ...args: Parameters<Func>
) {
  try {
    const data: ReturnType<Func> = yield call(requestFunc, ...args);
    yield put(handlers.success(data));

    return data;
  } catch (error) {
    yield put(handlers.error(error));

    return error;
  }
}
