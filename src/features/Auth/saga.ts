import { call, takeLatest } from "redux-saga/effects";

import { Path } from "src/router/path";
import { LocalStorageKey } from "src/constants";
import { router } from "src/router/router";
import { loginApi, registerApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import {
  loginError,
  loginRequest,
  loginSuccess,
  registerError,
  registerRequest,
  registerSuccess,
} from "./slice";

function* loginRequestSaga(action: ReturnType<typeof loginRequest>) {
  yield call(
    handleRequest,
    { success: loginSuccess, error: loginError },
    loginApi,
    action.payload
  );
}

function* loginSuccessSaga(action: ReturnType<typeof loginSuccess>) {
  yield localStorage.setItem(
    LocalStorageKey.TOKEN,
    action.payload.access_token
  );
  // https://github.com/remix-run/react-router/issues/9422
  router.navigate(Path.USERS, { replace: true });
}

function* registerRequestSaga(action: ReturnType<typeof registerRequest>) {
  yield call(
    handleRequest,
    { success: registerSuccess, error: registerError },
    registerApi,
    action.payload
  );
}

function* registerSuccessSaga(action: ReturnType<typeof registerSuccess>) {
  yield localStorage.setItem(
    LocalStorageKey.TOKEN,
    action.payload.access_token
  );
  // @TODO: redirect to profile page
  router.navigate(Path.USERS, { replace: true });
}

function* authSaga() {
  yield takeLatest(loginRequest.type, loginRequestSaga);
  yield takeLatest(loginSuccess.type, loginSuccessSaga);
  yield takeLatest(registerRequest.type, registerRequestSaga);
  yield takeLatest(registerSuccess.type, registerSuccessSaga);
}

export default authSaga;
