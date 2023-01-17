import { call, delay, takeLatest } from "redux-saga/effects";

import { categorySearchApi } from "src/api/services";
import { handleRequest } from "src/redux/saga/handleRequest";
import {
  searchCategoryRequest,
  searchCategorySuccess,
  searchCategoryError,
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

function* authSaga() {
  yield takeLatest(searchCategoryRequest.type, searchCategoryRequestSaga);
}

export default authSaga;
