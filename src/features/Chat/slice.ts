import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Error } from "src/api/api";
import {
  ChatState,
  CreateMessageRequestPayload,
  GetMessagesRequestPayload,
  GetMessagesSuccessPayload,
  UpdateMessagesRequestPayload,
} from "./Chat.d";
import { Status } from "src/constants";

const initialState: ChatState = {
  chats: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
  messages: {
    status: Status.INIT,
    data: [],
    reason: {},
  },
  message: {
    status: Status.INIT,
    data: {} as ChatState["message"]["data"],
    reason: {},
  },
  unreadChatInfo: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    getChatsRequest: (state) => {
      state.chats.status = Status.LOADING;
      state.chats.reason = initialState.chats.reason;
    },
    getChatsSuccess: (
      state,
      action: PayloadAction<ChatState["chats"]["data"]>
    ) => {
      state.chats.status = Status.LOADED;
      state.chats.data = action.payload;
    },
    getChatsError: (state, action: PayloadAction<Error>) => {
      state.chats.status = Status.ERROR;
      state.chats.reason = action.payload;
    },

    getMessagesRequest: (
      state,
      action: PayloadAction<GetMessagesRequestPayload>
    ) => {
      state.messages.status = Status.LOADING;
      state.messages.reason = initialState.messages.reason;
    },
    getMessagesSuccess: (
      state,
      action: PayloadAction<GetMessagesSuccessPayload>
    ) => {
      state.messages.status = Status.LOADED;
      state.messages.data = action.payload.response;
    },
    getMessagesError: (state, action: PayloadAction<Error>) => {
      state.messages.status = Status.ERROR;
      state.messages.reason = action.payload;
    },

    createMessageRequest: (
      state,
      action: PayloadAction<CreateMessageRequestPayload>
    ) => {
      state.message.status = Status.LOADING;
      state.message.reason = initialState.message.reason;
    },
    createMessageSuccess: (
      state,
      action: PayloadAction<ChatState["message"]["data"]>
    ) => {
      state.message.status = Status.LOADED;
      state.messages.data.push(action.payload);
    },
    createMessageError: (state, action: PayloadAction<Error>) => {
      state.message.status = Status.ERROR;
      state.message.reason = action.payload;
    },

    appendMessage: (
      state,
      action: PayloadAction<ChatState["message"]["data"]>
    ) => {
      state.messages.data.push(action.payload);
    },

    setUnreadChatInfo: (
      state,
      action: PayloadAction<ChatState["unreadChatInfo"]>
    ) => {
      state.unreadChatInfo = action.payload;
    },
    updateUnreadChatInfo: (
      state,
      action: PayloadAction<{
        peerId: number;
        incrementBy: number;
        text: string;
      }>
    ) => {
      const { peerId, incrementBy, text } = action.payload;
      const unreadChatInfo = state.unreadChatInfo.find(
        ({ senderId }) => senderId === peerId
      );

      if (unreadChatInfo) {
        unreadChatInfo._count += incrementBy;
        unreadChatInfo.text = text;
      } else {
        state.unreadChatInfo.push({ _count: 1, senderId: peerId, text });
      }
    },
  },
});

export const sendMessageToSocket = createAction<ChatState["message"]["data"]>(
  "chat/sendMessageToSocket"
);
export const updateMessagesRequest = createAction<UpdateMessagesRequestPayload>(
  "chat/updateMessagesRequest"
);
export const getUnreadChatInfoRequest = createAction(
  "chat/getUnreadChatInfoRequest"
);

export const {
  getChatsError,
  getChatsRequest,
  getChatsSuccess,

  getMessagesError,
  getMessagesRequest,
  getMessagesSuccess,

  createMessageError,
  createMessageRequest,
  createMessageSuccess,

  appendMessage,

  setUnreadChatInfo,
  updateUnreadChatInfo,
} = chatSlice.actions;
export default chatSlice.reducer;
