import { FriendshipStatus } from "src/constants";
import { AddLocationRequestPayload } from "src/features/Account/Account.d";
import {
  LoginRequestPayload,
  RegisterRequestPayload,
} from "src/features/Auth/Auth.d";
import {
  CreateMessageRequestPayload,
  GetChatsRequestApiParams,
  GetMessagesRequestPayload,
  UpdateMessagesRequestPayload,
} from "src/features/Chat/Chat.d";
import {
  GetUsersRequestPayload,
  GetCategoriesRequestPayload,
} from "src/features/Explore/Explore.d";
import { GetCommentsRequestPayload } from "src/features/Feed/Feed.d";
import { GetNotificationCountRequestPayload } from "src/features/Notifications/Notifications.d";
import {
  FollowRequestPayload,
  GetPostsRequestPayload,
  GetUserRequestPayload,
  UnfollowRequestPayload,
} from "src/features/Profile/Profile.d";
import {
  RemoveFriendshipRequestPayload,
  RequestFriendshipRequestPayload,
  AcceptFriendshipRequestPayload,
} from "src/features/Friendship/Friendship";
import { replacePathParams } from "src/utils/replace-path-params";
import { Endpoint } from "./endpoint";
import { request } from "./request";

// Auth

export const loginApi = (data: LoginRequestPayload) =>
  request.post(Endpoint.Auth.LOGIN, data);

export const registerApi = (data: RegisterRequestPayload) =>
  request.post(Endpoint.Auth.REGISTER, data);

// Category

export const categorySearchApi = ({ name }: GetCategoriesRequestPayload) =>
  request.get(Endpoint.Category.SEARCH, {
    params: {
      name,
    },
  });

// User

export const getUserApi = (userId: GetUserRequestPayload) =>
  request.get(replacePathParams(Endpoint.User.GET, { userId }));

export const getUsersApi = (params: GetUsersRequestPayload) =>
  request.get(Endpoint.User.SEARCH, { params });

export const getFeedApi = () => request.get(Endpoint.User.GET_FEED);

// Locations

export const addLocationApi = (data: AddLocationRequestPayload) =>
  request.post(Endpoint.User.ADD_LOCATION, data);

export const getLocationsApi = () => request.get(Endpoint.User.GET_LOCATIONS);

// Chat

export const getChatsApi = (params?: GetChatsRequestApiParams) =>
  request.get(Endpoint.User.GET_CHATS, { params });

export const getMessagesApi = (peerId: GetMessagesRequestPayload) =>
  request.get(Endpoint.User.GET_MESSAGES, {
    params: { peerId },
  });

export const createMessageApi = (data: CreateMessageRequestPayload) =>
  request.post(Endpoint.User.CREATE_MESSAGE, data);

export const updateMessagesApi = (peerId: UpdateMessagesRequestPayload) =>
  request.patch(Endpoint.User.UPDATE_MESSAGES, { peerId });

// Follow

export const followApi = (followingId: FollowRequestPayload) =>
  request.post(Endpoint.User.FOLLOW, { followingId });

export const unfollowApi = (followingId: UnfollowRequestPayload) =>
  request.delete(Endpoint.User.UNFOLLOW, { data: { followingId } });

// Friendship

export const getFriendsApi = (status: FriendshipStatus) =>
  request.get(Endpoint.User.GET_FRIENDS, { params: { status } });

export const requestFriendshipApi = (
  receiverId: RequestFriendshipRequestPayload
) => request.post(Endpoint.User.REQUEST_FRIENDSHIP, { receiverId });

export const acceptFriendshipApi = (data: AcceptFriendshipRequestPayload) =>
  request.patch(Endpoint.User.UPDATE_FRIENDSHIP, data);

export const removeFriendshipApi = (data: RemoveFriendshipRequestPayload) =>
  request.delete(Endpoint.User.REMOVE_FRIENDSHIP, { data });

// Notifications

export const getNotificationsApi = () =>
  request.get(Endpoint.User.GET_NOTIFICATIONS);

export const getNotificationCountApi = (
  payload: GetNotificationCountRequestPayload
) =>
  request.get(replacePathParams(Endpoint.User.GET_NOTIFICATION_COUNT, payload));

export const updateNotificationsApi = () =>
  request.patch(Endpoint.User.UPDATE_NOTIFICATIONS);

// Post

export const getCommentsApi = (postId: GetCommentsRequestPayload) =>
  request.get(replacePathParams(Endpoint.Post.GET_COMMENTS, { postId }));

export const getPostsApi = (userId: GetPostsRequestPayload) =>
  request.get(replacePathParams(Endpoint.User.GET_POSTS, { userId }));

// Init

export const initApi = () => request.get(Endpoint.INIT);
