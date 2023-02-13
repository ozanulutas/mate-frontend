import { call, select, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import {
  followApi,
  getPostsApi,
  getUserApi,
  removeFriendshipApi,
  requestFriendshipApi,
  unfollowApi,
} from "src/api/services";
import {
  getUserSuccess,
  getUserError,
  getUserRequest,
  getPostsError,
  getPostsRequest,
  getPostsSuccess,
  followError,
  followRequest,
  followSuccess,
  unfollowError,
  unfollowRequest,
  unfollowSuccess,
  requestFriendshipRequest,
  requestFriendshipError,
  requestFriendshipSuccess,
  removeFriendshipError,
  removeFriendshipRequest,
  removeFriendshipSuccess,
} from "./slice";
import { selectUserProfileId } from "./selectors";

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

function* followRequestSaga(): Generator {
  const userProfileId = yield select(selectUserProfileId);

  yield call(
    handleRequest,
    { success: followSuccess, error: followError },
    followApi,
    userProfileId
  );
}

function* unfollowRequestSaga(): Generator {
  const userProfileId = yield select(selectUserProfileId);

  yield call(
    handleRequest,
    { success: unfollowSuccess, error: unfollowError },
    unfollowApi,
    userProfileId
  );
}

function* requestFriendshipRequestSaga(): Generator {
  const userProfileId = yield select(selectUserProfileId);

  yield call(
    handleRequest,
    { success: requestFriendshipSuccess, error: requestFriendshipError },
    requestFriendshipApi,
    userProfileId
  );
}

function* removeFriendshipRequestSaga(
  action: ReturnType<typeof removeFriendshipRequest>
) {
  yield call(
    handleRequest,
    { success: removeFriendshipSuccess, error: removeFriendshipError },
    removeFriendshipApi,
    action.payload
  );
}

function* profileSaga() {
  yield takeLatest(getUserRequest.type, getUserRequestSaga);
  yield takeLatest(getPostsRequest.type, getPostsRequestSaga);
  yield takeLatest(followRequest.type, followRequestSaga);
  yield takeLatest(unfollowRequest.type, unfollowRequestSaga);
  yield takeLatest(requestFriendshipRequest.type, requestFriendshipRequestSaga);
  yield takeLatest(removeFriendshipRequest.type, removeFriendshipRequestSaga);
}

export default profileSaga;
