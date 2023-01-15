import { call, takeLatest } from "redux-saga/effects";

import { Path } from "src/router/path";
import { LocalStorageKey } from "src/constants";
import { router } from "src/router/router";
import { loginApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import { loginError, loginRequest, loginSuccess } from "./slice";

function* loginRequestSaga(action: ReturnType<typeof loginRequest>): Generator {
  const resp = yield call(
    handleRequest,
    { success: loginSuccess, error: loginError },
    loginApi,
    action.payload
  );
  console.log(resp);
}

function* loginSuccessSaga(action: ReturnType<typeof loginSuccess>) {
  yield localStorage.setItem(
    LocalStorageKey.TOKEN,
    action.payload.access_token
  );
  // https://github.com/remix-run/react-router/issues/9422
  router.navigate(Path.USERS, { replace: true });
}

function* authSaga() {
  yield takeLatest(loginRequest.type, loginRequestSaga);
  yield takeLatest(loginSuccess.type, loginSuccessSaga);
}

export default authSaga;
