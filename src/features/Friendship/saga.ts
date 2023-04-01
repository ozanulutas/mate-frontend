import { call, select, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import {
  getFriendsApi,
  removeFriendshipApi,
  requestFriendshipApi,
  updateFriendshipApi,
} from "src/api/services";
import {
  getFriendshipRequestsError,
  getFriendshipRequestsRequest,
  getFriendshipRequestsSuccess,
  removeFriendshipError,
  removeFriendshipRequest,
  removeFriendshipSuccess,
  requestFriendshipError,
  requestFriendshipRequest,
  requestFriendshipSuccess,
  updateFriendshipError,
  updateFriendshipRequest,
  updateFriendshipSuccess,
} from "./slice";
import { FriendshipStatus } from "src/constants";
import { selectUserProfileId } from "../Profile/selectors";

function* getFriendshipRequestsRequestSaga() {
  yield call(
    handleRequest,
    {
      success: getFriendshipRequestsSuccess,
      error: getFriendshipRequestsError,
    },
    getFriendsApi,
    FriendshipStatus.REQUESTED
  );
}

function* requestFriendshipRequestSaga() {
  const userProfileId: ReturnType<typeof selectUserProfileId> = yield select(
    selectUserProfileId
  );

  yield call(
    handleRequest,
    { success: requestFriendshipSuccess, error: requestFriendshipError },
    requestFriendshipApi,
    userProfileId
  );
}

function* updateFriendshipRequestSaga(
  action: ReturnType<typeof updateFriendshipRequest>
) {
  yield call(
    handleRequest,
    { success: updateFriendshipSuccess, error: updateFriendshipError },
    updateFriendshipApi,
    action.payload
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

function* friendshipSaga() {
  yield takeLatest(
    getFriendshipRequestsRequest.type,
    getFriendshipRequestsRequestSaga
  );
  yield takeLatest(requestFriendshipRequest.type, requestFriendshipRequestSaga);
  yield takeLatest(updateFriendshipRequest.type, updateFriendshipRequestSaga);
  yield takeLatest(removeFriendshipRequest.type, removeFriendshipRequestSaga);
}

export default friendshipSaga;
