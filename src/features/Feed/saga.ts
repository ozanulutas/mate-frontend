import { call, put, select, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import {
  createCommentApi,
  createPostApi,
  getCommentsApi,
  getFeedApi,
} from "src/api/services";
import {
  getFeedSuccess,
  getFeedError,
  getFeedRequest,
  getCommentsError,
  getCommentsSuccess,
  getCommentsRequest,
  createPostError,
  createPostSuccess,
  createPostRequest,
  createCommentError,
  createCommentRequest,
  createCommentSuccess,
  increaseCommentCount,
} from "./slice";
import { selectSelectedPostId } from "./selectors";

function* getFeedRequestSaga() {
  yield call(
    handleRequest,
    { success: getFeedSuccess, error: getFeedError },
    getFeedApi
  );
}

function* createPostRequestSaga(action: ReturnType<typeof getFeedRequest>) {
  yield call(
    handleRequest,
    { success: createPostSuccess, error: createPostError },
    createPostApi,
    action.payload
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

function* createCommentRequestSaga(action: ReturnType<typeof getFeedRequest>) {
  yield call(
    handleRequest,
    { success: createCommentSuccess, error: createCommentError },
    createCommentApi,
    action.payload
  );
}

function* createCommentSuccessSaga() {
  const postId: ReturnType<typeof selectSelectedPostId> = yield select(
    selectSelectedPostId
  );

  yield put(increaseCommentCount({ incrementBy: 1, postId }));
}

function* feedSaga() {
  yield takeLatest(getFeedRequest.type, getFeedRequestSaga);
  yield takeLatest(createPostRequest.type, createPostRequestSaga);
  yield takeLatest(getCommentsRequest.type, getCommentsRequestSaga);
  yield takeLatest(createCommentRequest.type, createCommentRequestSaga);
  yield takeLatest(createCommentSuccess.type, createCommentSuccessSaga);
}

export default feedSaga;
