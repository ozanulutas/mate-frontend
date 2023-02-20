import { call, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import { getNotificationsApi } from "src/api/services";
import {
  getNotificationsSuccess,
  getNotificationsError,
  getNotificationsRequest,
} from "./slice";

function* getNotificationsRequestSaga() {
  yield call(
    handleRequest,
    { success: getNotificationsSuccess, error: getNotificationsError },
    getNotificationsApi
  );
}

function* notificationsSaga() {
  yield takeLatest(getNotificationsRequest.type, getNotificationsRequestSaga);
}

export default notificationsSaga;
