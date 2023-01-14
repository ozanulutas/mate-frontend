import { call, takeLatest } from "redux-saga/effects";
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

function* authSaga() {
  yield takeLatest(loginRequest.type, loginRequestSaga);
}

export default authSaga;
