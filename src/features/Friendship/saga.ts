import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { matchPath } from "react-router-dom";

import { handleRequest } from "src/redux/saga/handleRequest";
import {
  getFriendsApi,
  removeFriendshipApi,
  requestFriendshipApi,
  acceptFriendshipApi,
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
  acceptFriendshipError,
  acceptFriendshipRequest,
  acceptFriendshipSuccess,
  setFriendshipRequestsCount,
  searchFriendsRequest,
  searchFriendsSuccess,
  searchFriendsError,
} from "./slice";
import { FriendshipStatus } from "src/constants";
import { selectUserProfileId } from "../Profile/selectors";
import { setFriendshipInfo } from "../Profile/slice";
import { Path } from "src/router/path";

function* searchFriendsRequestSaga(
  action: ReturnType<typeof searchFriendsRequest>
) {
  yield delay(500);

  yield call(
    handleRequest,
    {
      success: searchFriendsSuccess,
      error: searchFriendsError,
    },
    getFriendsApi,
    { status: FriendshipStatus.ACCEPTED, name: action.payload }
  );
}

function* getFriendshipRequestsRequestSaga() {
  yield call(
    handleRequest,
    {
      success: getFriendshipRequestsSuccess,
      error: getFriendshipRequestsError,
    },
    getFriendsApi,
    { status: FriendshipStatus.REQUESTED }
  );
}

function* getFriendshipRequestsSuccessSaga(
  action: ReturnType<typeof getFriendshipRequestsSuccess>
) {
  yield put(setFriendshipRequestsCount(action.payload.length));
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

function* requestFriendshipSuccessSaga(
  action: ReturnType<typeof requestFriendshipSuccess>
) {
  yield put(setFriendshipInfo(action.payload));
}

function* acceptFriendshipRequestSaga(
  action: ReturnType<typeof acceptFriendshipRequest>
) {
  yield call(
    handleRequest,
    { success: acceptFriendshipSuccess, error: acceptFriendshipError },
    acceptFriendshipApi,
    action.payload
  );
}

function* acceptFriendshipSuccessSaga() {
  const path = window.location.pathname;
  const friendshipRequestsPath = matchPath(
    { path: Path.FRIENDSHIP_REQUESTS },
    path
  );

  if (friendshipRequestsPath) {
    yield put(getFriendshipRequestsRequest());
  }
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

function* removeFriendshipSuccessSaga() {
  const path = window.location.pathname;
  const friendshipRequestsPath = matchPath(
    { path: Path.FRIENDSHIP_REQUESTS },
    path
  );

  if (friendshipRequestsPath) {
    yield put(getFriendshipRequestsRequest());
    return;
  }

  // @TODO: check if it is prfoile page
  yield put(setFriendshipInfo(null));
}

function* friendshipSaga() {
  yield takeLatest(searchFriendsRequest.type, searchFriendsRequestSaga);
  yield takeLatest(
    getFriendshipRequestsRequest.type,
    getFriendshipRequestsRequestSaga
  );
  yield takeLatest(
    getFriendshipRequestsSuccess.type,
    getFriendshipRequestsSuccessSaga
  );
  yield takeLatest(requestFriendshipRequest.type, requestFriendshipRequestSaga);
  yield takeLatest(requestFriendshipSuccess.type, requestFriendshipSuccessSaga);
  yield takeLatest(acceptFriendshipRequest.type, acceptFriendshipRequestSaga);
  yield takeLatest(acceptFriendshipSuccess.type, acceptFriendshipSuccessSaga);
  yield takeLatest(removeFriendshipRequest.type, removeFriendshipRequestSaga);
  yield takeLatest(removeFriendshipSuccess.type, removeFriendshipSuccessSaga);
}

export default friendshipSaga;
