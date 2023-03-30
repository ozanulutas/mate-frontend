import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectChat = (state: RootState) => state.chat;

export const selectChats = createSelector(
  selectChat,
  (chat) => chat.chats.data
);

export const selectUnreadChatInfo = createSelector(
  selectChat,
  (chat) => chat.unreadChatInfo
);

export const selectUnreadChatCount = createSelector(
  selectUnreadChatInfo,
  (unreadChatInfo) => unreadChatInfo.length
);

// @TODO: mutate chats state with unreadChatInfo instead?
export const selectReactiveChats = createSelector(
  selectChats,
  selectUnreadChatInfo,
  (chats, unreadChatInfo) => {
    return chats.reduce<(typeof chats[0] & { unreadMessageCount: number })[]>(
      (acc, chat) => {
        const unreadChat = unreadChatInfo.find(
          (item) => item.senderId === chat.userId
        );

        return [
          ...acc,
          {
            ...chat,
            unreadMessageCount: unreadChat ? unreadChat._count : 0,
            text: unreadChat ? unreadChat.text : chat.text,
          },
        ];
      },
      []
    );
  }
);

export const selectMessages = createSelector(
  selectChat,
  (chat) => chat.messages.data
);

export const selectMessageStatus = createSelector(
  selectChat,
  (chat) => chat.message.status
);
