import { all } from "redux-saga/effects";

import authSaga from "src/features/Auth/saga";

export function* rootSaga() {
  yield all([authSaga()]);
}
