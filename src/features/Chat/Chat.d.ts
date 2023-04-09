import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { User } from "src/types";

export interface ChatState {
  chats: {
    status: Status;
    data: Chat[];
    reason: Error;
  };
  messages: {
    status: Status;
    data: Message[];
    reason: Error;
  };
  message: {
    status: Status;
    data: Message;
    reason: Error;
  };

  unreadChatInfo: UnreadChatInfo[];
}

interface Message {
  id: number;
  text: string;
  isRead: number;
  sender: Pick<User, "id" | "username">;
  receiver: Pick<User, "id" | "username">;
  createdAt: string;
}

interface Chat {
  userId: User["id"];
  username: User["username"];
  text: string;
  // isRead: boolean;
  unreadMessageCount: number;
}

export interface UnreadChatInfo {
  senderId: User["id"];
  text: string;
  _count: number;
}

export type GetMessagesRequestPayload = User["id"];
export type GetMessagesSuccessPayload = {
  response: ChatState["messages"]["data"];
  peerId: number;
};

export type CreateMessageRequestPayload = {
  receiverId: User["id"];
  text: string;
};

export type UpdateMessagesRequestPayload = User["id"];

export type GetChatsRequestApiParams = {
  count: ["unread"?];
};
