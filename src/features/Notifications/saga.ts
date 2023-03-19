import { call, select, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import { getNotificationsApi, updateNotificationsApi } from "src/api/services";
import {
  getNotificationsSuccess,
  getNotificationsError,
  getNotificationsRequest,
} from "./slice";
import { selectReceivedNotificationsCount } from "../AppConfig/selectors";
import { decreaseNotificationCount } from "../AppConfig/slice";

function* getNotificationsRequestSaga() {
  yield call(
    handleRequest,
    { success: getNotificationsSuccess, error: getNotificationsError },
    getNotificationsApi
  );
}

function* getNotificationsSuccessSaga(): Generator {
  const unreadNotificationCount = yield select(
    selectReceivedNotificationsCount
  );

  if ((unreadNotificationCount as number) > 0) {
    yield call(
      handleRequest,
      {
        success: ({ count }: { count: number }) =>
          decreaseNotificationCount(count),
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
