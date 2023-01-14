import { call, put } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";
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
    const { data }: AxiosResponse = yield call(requestFunc, ...args);
    yield put(handlers.success(data));

    return data;
  } catch (error) {
    const err = error as AxiosError;
    yield put(handlers.error(err.response?.data));

    return err.response?.data;
  }
}
