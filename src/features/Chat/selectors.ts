import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectChat = (state: RootState) => state.chat;

export const selectChats = createSelector(
  selectChat,
  (chat) => chat.chats.data
);

export const selectMessages = createSelector(
  selectChat,
  (chat) => chat.messages.data
);
