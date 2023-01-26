import { call, takeLatest } from "redux-saga/effects";

import { loginApi, addLocationApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import {
  addLocationRequest,
  addLocationError,
  addLocationSuccess,
} from "./slice";

function* addLocationRequestSaga(
  action: ReturnType<typeof addLocationRequest>
) {
  yield call(
    handleRequest,
    { success: addLocationSuccess, error: addLocationError },
    addLocationApi,
    action.payload
  );
}

function* authSaga() {
  yield takeLatest(addLocationRequest.type, addLocationRequestSaga);
}

export default authSaga;
