import { call, delay, takeLatest } from "redux-saga/effects";

import { categorySearchApi, getUsersApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import {
  searchCategoryRequest,
  searchCategorySuccess,
  searchCategoryError,
  getUsersSuccess,
  getUsersError,
  getUsersRequest,
} from "./slice";

function* searchCategoryRequestSaga(
  action: ReturnType<typeof searchCategoryRequest>
) {
  yield delay(500);

  yield call(
    handleRequest,
    { success: searchCategorySuccess, error: searchCategoryError },
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

function* authSaga() {
  yield takeLatest(searchCategoryRequest.type, searchCategoryRequestSaga);
  yield takeLatest(getUsersRequest.type, getUsersRequestSaga);
}

export default authSaga;
