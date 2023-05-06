import { call, put, takeLatest } from "redux-saga/effects";

import { initApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import { setUnreadChatInfo } from "src/features/Chat/slice";
import { setUnviewedNotificationCount } from "src/features/Notifications/slice";
import { appConfigRequest, appConfigSuccess, setUser } from "./slice";
import { setFriendshipRequestsCount } from "../Friendship/slice";
import { setSelectedLocation } from "../Account/slice";

function* appConfigRequestSaga() {
  yield call(handleRequest, { success: appConfigSuccess }, initApi);
}

function* appConfigSuccessSaga(action: ReturnType<typeof appConfigSuccess>) {
  const {
    unreadChatInfo,
    unviewedNotificationCount,
    friendshipRequestCount,
    user,
    selectedLocation,
  } = action.payload;

  yield put(setUnviewedNotificationCount(unviewedNotificationCount));
  yield put(setFriendshipRequestsCount(friendshipRequestCount));
  yield put(setUnreadChatInfo(unreadChatInfo));
  yield put(setUser(user));
  yield put(setSelectedLocation(selectedLocation));
}

function* appConfigSaga() {
  yield takeLatest(appConfigRequest.type, appConfigRequestSaga);
  yield takeLatest(appConfigSuccess.type, appConfigSuccessSaga);
}

export default appConfigSaga;
