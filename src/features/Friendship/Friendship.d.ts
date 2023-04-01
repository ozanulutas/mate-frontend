import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { User } from "src/types";

export interface FriendshipState {
  friendshipRequests: {
    status: Status;
    data: Friendship[];
    reason: Error;
  };
  requestFriendship: {
    status: Status;
    data: any; // @TODO: type
    reason: Error;
  };
  updateFriendship: {
    status: Status;
    data: any; // @TODO: type
    reason: Error;
  };
  removeFriendship: {
    status: Status;
    data: any; // @TODO: type
    reason: Error;
  };
  friendshipRequestCount: number;
}

export interface Friendship {
  id: number;
  createdAt: string;
  sender: Pick<User, "id" | "username">;
}

export type RequestFriendshipRequestPayload = User["id"];
export type RemoveFriendshipRequestPayload = User["id"];
export type UpdateFriendshipRequestPayload = {
  receiverId: User["id"];
  friendshipStatusId: FriendshipStatus;
};
