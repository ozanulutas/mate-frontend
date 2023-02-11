import { call, put, takeLatest } from "redux-saga/effects";

import { handleRequest } from "src/redux/saga/handleRequest";
import {
  createMessageApi,
  getChatsApi,
  getMessagesApi,
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
} from "./slice";

function* getChatsRequestSaga() {
  yield call(
    handleRequest,
    { success: getChatsSuccess, error: getChatsError },
    getChatsApi
  );
}

function* getMessagesRequestSaga(
  action: ReturnType<typeof getMessagesRequest>
) {
  yield call(
    handleRequest,
    { success: getMessagesSuccess, error: getMessagesError },
    getMessagesApi,
    action.payload
  );
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

function* chatSaga() {
  yield takeLatest(getChatsRequest.type, getChatsRequestSaga);
  yield takeLatest(getMessagesRequest.type, getMessagesRequestSaga);
  yield takeLatest(createMessageRequest.type, createMessageRequestSaga);
  yield takeLatest(createMessageSuccess.type, createMessageSuccessSaga);
}

export default chatSaga;
