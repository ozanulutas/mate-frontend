import { call, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import { getPostsApi, getUserApi } from "src/api/services";
import {
  getUserSuccess,
  getUserError,
  getUserRequest,
  getPostsError,
  getPostsRequest,
  getPostsSuccess,
} from "./slice";

function* getUserRequestSaga(action: ReturnType<typeof getUserRequest>) {
  yield call(
    handleRequest,
    { success: getUserSuccess, error: getUserError },
    getUserApi,
    action.payload
  );
}

function* getPostsRequestSaga(action: ReturnType<typeof getPostsRequest>) {
  yield call(
    handleRequest,
    { success: getPostsSuccess, error: getPostsError },
    getPostsApi,
    action.payload
  );
}

function* profileSaga() {
  yield takeLatest(getUserRequest.type, getUserRequestSaga);
  yield takeLatest(getPostsRequest.type, getPostsRequestSaga);
}

export default profileSaga;
