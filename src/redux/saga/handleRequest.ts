import { call, put } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";

export function* handleRequest<
  RequestFuncArgs extends any[],
  RequestFuncReturn extends Promise<AxiosResponse>,
  Handler extends ActionCreatorWithOptionalPayload<any>
>(
  handlers: {
    success: Handler;
    error: Handler;
  },
  requestFunc: (...args: RequestFuncArgs) => RequestFuncReturn,
  ...args: RequestFuncArgs
) {
  try {
    const data: RequestFuncReturn = yield call(requestFunc, ...args);
    yield put(handlers.success(data));

    return data;
  } catch (error) {
    yield put(handlers.error(error));

    return error;
  }
}
