import { call, delay, takeLatest } from "redux-saga/effects";

import { categorySearchApi, getUsersApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
  getUsersSuccess,
  getUsersError,
  getUsersRequest,
} from "./slice";

function* getCategoriesRequestSaga(
  action: ReturnType<typeof getCategoriesRequest>
) {
  yield delay(500);

  yield call(
    handleRequest,
    { success: getCategoriesSuccess, error: getCategoriesError },
    categorySearchApi,
    action.payload
  );
}

function* getUsersRequestSaga(action: ReturnType<typeof getUsersRequest>) {
  yield call(
    handleRequest,
    { success: getUsersSuccess, error: getUsersError },
    getUsersApi,
    action.payload
  );
}

function* exploreSaga() {
  yield takeLatest(getCategoriesRequest.type, getCategoriesRequestSaga);
  yield takeLatest(getUsersRequest.type, getUsersRequestSaga);
}

export default exploreSaga;
