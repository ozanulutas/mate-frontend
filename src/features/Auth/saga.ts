import { takeLatest } from "redux-saga/effects";
import { loginRequest } from "./slice";

function* loginRequestSaga(action: ReturnType<typeof loginRequest>) {
  console.log(action.payload);
}

function* authSaga() {
  yield takeLatest(loginRequest.type, loginRequestSaga);
}

export default authSaga;
