import { call, put } from "redux-saga/effects";
import { AxiosError, AxiosResponse } from "axios";
import { ActionCreatorWithOptionalPayload } from "@reduxjs/toolkit";
import { openToast } from "src/components/Toast/slice";

export function* handleRequest<
  Func extends (...args: any[]) => Promise<AxiosResponse>,
  Handler extends ActionCreatorWithOptionalPayload<any>
>(
  handlers: {
    success?: Handler;
    error: Handler;
  },
  requestFunc: Func,
  ...args: Parameters<Func>
) {
  try {
    const { data }: AxiosResponse = yield call(requestFunc, ...args);
    const { toast, popup, actionCode } = data?.result ?? {};

    if (handlers.success) {
      yield put(handlers.success(data.data));
    }

    if (toast) {
      yield put(openToast(toast));
    }

    return data;
  } catch (error) {
    console.error(error);
    const errorData: any = (error as AxiosError).response?.data;
    const { toast, popup, actionCode, ...rest } = errorData ?? {};

    yield put(handlers.error(rest));

    if (toast) {
      yield put(openToast(toast));
    }

    return errorData;
  }
}
