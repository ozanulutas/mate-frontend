import { call, takeLatest } from "redux-saga/effects";

import { addLocationApi, getLocationsApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import {
  addLocationRequest,
  addLocationError,
  addLocationSuccess,
  getLocationsSuccess,
  getLocationsError,
  getLocationsRequest,
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

function* getLocationsRequestSaga() {
  yield call(
    handleRequest,
    { success: getLocationsSuccess, error: getLocationsError },
    getLocationsApi
  );
}

function* authSaga() {
  yield takeLatest(addLocationRequest.type, addLocationRequestSaga);
  yield takeLatest(getLocationsRequest.type, getLocationsRequestSaga);
}

export default authSaga;
