import { Location, User } from "src/types";
import { UnreadChatInfo } from "../Chat/Chat";

export interface AppConfigState {
  user: Pick<User, "id" | "username">;
}

export type AppConfigSuccessPayload = {
  user: Pick<User, "id" | "username">;
  unviewedNotificationCount: number;
  friendshipRequestCount: number;
  unreadChatInfo: UnreadChatInfo[];
  selectedLocationId: Location["id"];
};
