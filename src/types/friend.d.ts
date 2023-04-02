import { FriendshipStatus } from "src/constants";
import { User } from "./user";

export interface FriendshipInfo {
  id: number;
  friendshipStatusId: FriendshipStatus;
  receiverId: User["id"];
  senderId: User["id"];
}
