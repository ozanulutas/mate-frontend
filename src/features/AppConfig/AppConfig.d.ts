import { Location, User } from "src/types";
import { UnreadChatInfo } from "../Chat/Chat";

export interface AppConfigState {
  user: Pick<
    User,
    | "id"
    | "username"
    | "birthday"
    | "countryCode"
    | "email"
    | "genderId"
    | "gsm"
  >;
}

export type AppConfigSuccessPayload = {
  user: AppConfigState["user"];
  unviewedNotificationCount: number;
  friendshipRequestCount: number;
  unreadChatInfo: UnreadChatInfo[];
  selectedLocation: Pick<Location, "id" | "name">;
};
