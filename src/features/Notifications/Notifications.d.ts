import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { User } from "src/types";
import { NotificationType } from "./constants";

export interface NotificationsState {
  notifications: {
    status: Status;
    data: Notification[];
    reason: Error;
  };
}

export interface Notification {
  id: number;
  entityId: number;
  notificationTypeId: NotificationType;
  createdAt: string;
  actor: Pick<User, "id" | "username">;
}
