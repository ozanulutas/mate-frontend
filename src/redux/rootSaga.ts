import { all } from "redux-saga/effects";

import authSaga from "src/features/Auth/saga";
import appConfigSaga from "src/features/AppConfig/saga";
import exploreSaga from "src/features/Explore/saga";
import accountSaga from "src/features/Account/saga";
import profileSaga from "src/features/Profile/saga";
import feedSaga from "src/features/Feed/saga";
import chatSaga from "src/features/Chat/saga";
import notificationsSaga from "src/features/Notifications/saga";
import friendshipSaga from "src/features/Friendship/saga";
import socketSaga from "src/features/Socket/saga";

export function* rootSaga() {
  yield all([
    appConfigSaga(),
    authSaga(),
    exploreSaga(),
    accountSaga(),
    profileSaga(),
    feedSaga(),
    chatSaga(),
    notificationsSaga(),
    friendshipSaga(),
    socketSaga(),
  ]);
}
