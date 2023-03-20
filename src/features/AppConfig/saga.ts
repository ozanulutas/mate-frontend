import { call, put, takeLatest } from "redux-saga/effects";

import { initApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import { setUnreadChatCount } from "src/features/Chat/slice";
import { setUnviewedNotificationCount } from "src/features/Notifications/slice";
import { appConfigRequest, appConfigSuccess, setUser } from "./slice";

function* appConfigRequestSaga() {
  yield call(handleRequest, { success: appConfigSuccess }, initApi);
}

function* appConfigSuccessSaga(action: ReturnType<typeof appConfigSuccess>) {
  const { unreadChatCount, unviewedNotificationCount, user } = action.payload;

  yield put(setUnviewedNotificationCount(unviewedNotificationCount));
  yield put(setUnreadChatCount(unreadChatCount));
  yield put(setUser(user));
}

function* appConfigSaga() {
  yield takeLatest(appConfigRequest.type, appConfigRequestSaga);
  yield takeLatest(appConfigSuccess.type, appConfigSuccessSaga);
}

export default appConfigSaga;