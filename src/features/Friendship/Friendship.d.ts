import { FriendshipRemoveAction, Status } from "src/constants";
import { Error } from "src/api/api.d";
import { FriendshipInfo, User } from "src/types";

export interface FriendshipState {
  friends: {
    status: Status;
    data: Pick<User, "id" | "username">[];
    reason: Error;
  };
  friendshipRequests: {
    status: Status;
    data: Friendship[];
    reason: Error;
  };
  requestFriendship: {
    status: Status;
    data: FriendshipInfo;
    reason: Error;
  };
  acceptFriendship: {
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
export type RemoveFriendshipRequestPayload = {
  receiverId: User["id"];
  removeAction: FriendshipRemoveAction;
};
export type AcceptFriendshipRequestPayload = {
  senderId: User["id"];
};

export type GetFriendsRequestPayload = {
  status: FriendshipState;
  name?: string;
};
