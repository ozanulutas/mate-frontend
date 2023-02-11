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
}

interface Message {
  id: number;
  text: string;
  sender: Pick<User, "id" | "username">;
  receiver: Pick<User, "id" | "username">;
  createdAt: string;
}

interface Chat {
  userId: User["id"];
  username: User["username"];
  text: string;
  isRead: boolean;
}

export type GetMessagesRequestPayload = User["id"];

export type CreateMessageRequestPayload = {
  receiverId: User["id"];
  text: string;
};
