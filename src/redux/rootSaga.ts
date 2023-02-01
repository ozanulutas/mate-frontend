import { all } from "redux-saga/effects";

import authSaga from "src/features/Auth/saga";
import exploreSaga from "src/features/Explore/saga";
import accountSaga from "src/features/Account/saga";
import profileSaga from "src/features/Profile/saga";
import feedSaga from "src/features/Feed/saga";

export function* rootSaga() {
  yield all([
    authSaga(),
    exploreSaga(),
    accountSaga(),
    profileSaga(),
    feedSaga(),
  ]);
}
