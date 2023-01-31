import { call, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import { getUserApi } from "src/api/services";
import { getUserSuccess, getUserError, getUserRequest } from "./slice";

function* getUserRequestSaga(action: ReturnType<typeof getUserRequest>) {
  yield call(
    handleRequest,
    { success: getUserSuccess, error: getUserError },
    getUserApi,
    action.payload
  );
}

function* profileSaga() {
  yield takeLatest(getUserRequest.type, getUserRequestSaga);
}

export default profileSaga;
