import { call, select, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import { getNotificationsApi, updateNotificationsApi } from "src/api/services";
import {
  getNotificationsSuccess,
  getNotificationsError,
  getNotificationsRequest,
  setUnviewedNotificationCount,
} from "./slice";
import { selectUnviewedNotificationsCount } from "./selectors";

function* getNotificationsRequestSaga() {
  yield call(
    handleRequest,
    { success: getNotificationsSuccess, error: getNotificationsError },
    getNotificationsApi
  );
}

function* getNotificationsSuccessSaga() {
  const unviewedNotificationCount: ReturnType<
    typeof selectUnviewedNotificationsCount
  > = yield select(selectUnviewedNotificationsCount);

  if ((unviewedNotificationCount as number) > 0) {
    yield call(
      handleRequest,
      {
        success: () => setUnviewedNotificationCount(0),
      },
      updateNotificationsApi
    );
  }
}

function* notificationsSaga() {
  yield takeLatest(getNotificationsRequest.type, getNotificationsRequestSaga);
  yield takeLatest(getNotificationsSuccess.type, getNotificationsSuccessSaga);
}

export default notificationsSaga;
