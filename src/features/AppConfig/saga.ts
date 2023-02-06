import { call, takeLatest } from "redux-saga/effects";

import { initApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import { appConfigError, appConfigRequest, appConfigSuccess } from "./slice";

function* appConfigRequestSaga() {
  yield call(
    handleRequest,
    { success: appConfigSuccess, error: appConfigError },
    initApi
  );
}

function* appConfigSaga() {
  yield takeLatest(appConfigRequest.type, appConfigRequestSaga);
}

export default appConfigSaga;
