import { call, put, select, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import { GetMessagesSuccessPayload } from "./Chat.d";
import {
  createMessageApi,
  getChatsApi,
  getMessagesApi,
  updateMessagesApi,
} from "src/api/services";
import {
  getChatsSuccess,
  getChatsError,
  getChatsRequest,
  getMessagesError,
  getMessagesSuccess,
  getMessagesRequest,
  createMessageRequest,
  createMessageError,
  createMessageSuccess,
  sendMessageToSocket,
  updateMessagesRequest,
  getUnreadChatInfoRequest,
  setUnreadChatInfo,
} from "./slice";
import { selectUnreadChatInfo } from "./selectors";

function* getChatsRequestSaga() {
  yield call(
    handleRequest,
    { success: getChatsSuccess, error: getChatsError },
    getChatsApi
  );
}

function* getUnreadChatInfoRequestSaga() {
  yield call(handleRequest, { success: setUnreadChatInfo }, getChatsApi, {
    count: ["unread"],
  });
}

function* getMessagesRequestSaga(
  action: ReturnType<typeof getMessagesRequest>
) {
  yield call(
    handleRequest,
    {
      success: (response: GetMessagesSuccessPayload["response"]) =>
        getMessagesSuccess({ response, peerId: action.payload }),
      error: getMessagesError,
    },
    getMessagesApi,
    action.payload
  );
}

function* getMessagesSuccessSaga(
  action: ReturnType<typeof getMessagesSuccess>
) {
  const unreadChatInfo: ReturnType<typeof selectUnreadChatInfo> = yield select(
    selectUnreadChatInfo
  );
  const { peerId } = action.payload;
  const { _count = 0 } =
    unreadChatInfo.find((info) => info.senderId === peerId) ?? {};

  if (_count > 0) {
    yield put(updateMessagesRequest(peerId));
  }
}

function* createMessageRequestSaga(
  action: ReturnType<typeof createMessageRequest>
) {
  yield call(
    handleRequest,
    { success: createMessageSuccess, error: createMessageError },
    createMessageApi,
    action.payload
  );
}

function* createMessageSuccessSaga(
  action: ReturnType<typeof createMessageSuccess>
) {
  yield put(sendMessageToSocket(action.payload));
}

function* updateMessageRequestSaga(
  action: ReturnType<typeof createMessageSuccess>
) {
  yield call(
    handleRequest,
    { success: getUnreadChatInfoRequest },
    updateMessagesApi,
    action.payload
  );
}

function* chatSaga() {
  yield takeLatest(getChatsRequest.type, getChatsRequestSaga);
  yield takeLatest(getUnreadChatInfoRequest.type, getUnreadChatInfoRequestSaga);
  yield takeLatest(getMessagesRequest.type, getMessagesRequestSaga);
  yield takeLatest(getMessagesSuccess.type, getMessagesSuccessSaga);
  yield takeLatest(createMessageRequest.type, createMessageRequestSaga);
  yield takeLatest(createMessageSuccess.type, createMessageSuccessSaga);
  yield takeLatest(updateMessagesRequest.type, updateMessageRequestSaga);
}

export default chatSaga;
