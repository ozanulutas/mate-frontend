import { call, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import { getCommentsApi, getFeedApi } from "src/api/services";
import {
  getFeedSuccess,
  getFeedError,
  getFeedRequest,
  getCommentsError,
  getCommentsSuccess,
  getCommentsRequest,
} from "./slice";

function* getFeedRequestSaga() {
  yield call(
    handleRequest,
    { success: getFeedSuccess, error: getFeedError },
    getFeedApi
  );
}

function* getCommentsRequestSaga(
  action: ReturnType<typeof getCommentsRequest>
) {
  yield call(
    handleRequest,
    { success: getCommentsSuccess, error: getCommentsError },
    getCommentsApi,
    action.payload
  );
}

function* feedSaga() {
  yield takeLatest(getFeedRequest.type, getFeedRequestSaga);
  yield takeLatest(getCommentsRequest.type, getCommentsRequestSaga);
}

export default feedSaga;
