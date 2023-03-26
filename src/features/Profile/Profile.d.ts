import { FriendshipStatus, Status } from "src/constants";
import { Error } from "src/api/api.d";
import { Post, User } from "src/types";

export interface ProfileState {
  user: {
    status: Status;
    data: ProfileUser;
    reason: Error;
  };
  posts: {
    status: Status;
    data: Post[];
    reason: Error;
  };
  follow: {
    status: Status;
    data: { id: User["id"] };
    reason: Error;
  };
  unfollow: {
    status: Status;
    data: { id: User["id"] };
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
}

interface ProfileUser extends Omit<User, "geojson"> {
  _count: {
    followers: number;
    followings: number;
  };
  isFollowedByMe: boolean;
  friendshipStatusWithMe: FriendshipStatus | null;
}

export type GetUserRequestPayload = User["id"] | string;
export type GetPostsRequestPayload = User["id"] | string;
export type FollowRequestPayload = User["id"];
export type UnfollowRequestPayload = User["id"];
export type RequestFriendshipRequestPayload = User["id"];
export type RemoveFriendshipRequestPayload = User["id"];
export type UpdateFriendshipRequestPayload = {
  receiverId: User["id"];
  friendshipStatusId: FriendshipStatus;
};
