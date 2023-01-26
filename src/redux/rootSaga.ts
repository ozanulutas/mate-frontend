import { all } from "redux-saga/effects";

import authSaga from "src/features/Auth/saga";
import searchSaga from "src/features/Search/saga";
import accountSaga from "src/features/Account/saga";

export function* rootSaga() {
  yield all([authSaga(), searchSaga(), accountSaga()]);
}
