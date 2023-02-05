import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { User } from "src/types";

// @TODO: refactor types
export interface ChatState {
  chats: {
    status: Status;
    data: {
      userId: User["id"];
      username: User["username"];
      text: string;
      isRead: boolean;
    }[];
    reason: Error;
  };
  messages: {
    status: Status;
    data: {
      id: number;
      text: string;
      sender: Pick<User, "id" | "username">;
      createdAt: string;
    }[];
    reason: Error;
  };
  message: {
    status: Status;
    data: {
      id: number;
      text: string;
      sender: Pick<User, "id" | "username">;
      createdAt: string;
    };
    reason: Error;
  };
}

export type GetMessagesRequestPayload = User["id"];

export type CreateMessageRequestPayload = {
  receiverId: User["id"];
  text: string;
};
