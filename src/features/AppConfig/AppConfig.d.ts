import { User } from "src/types";

export interface AppConfigState {
  user: Pick<User, "id" | "username">;
}

export type AppConfigSuccessPayload = {
  user: Pick<User, "id" | "username">;
  _count: {
    receivedNotifications: number;
    receivedMessages: number;
  };
};
