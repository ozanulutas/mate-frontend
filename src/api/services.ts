import { AddLocationRequestPayload } from "src/features/Account/Account.d";
import {
  LoginRequestPayload,
  RegisterRequestPayload,
} from "src/features/Auth/Auth.d";
import {
  CreateMessageRequestPayload,
  GetMessagesRequestPayload,
} from "src/features/Chat/Chat.d";
import {
  GetUsersRequestPayload,
  GetCategoriesRequestPayload,
} from "src/features/Explore/Explore.d";
import { GetCommentsRequestPayload } from "src/features/Feed/Feed.d";
import {
  FollowRequestPayload,
  GetPostsRequestPayload,
  GetUserRequestPayload,
  RemoveFriendshipRequestPayload,
  RequestFriendshipRequestPayload,
  UnfollowRequestPayload,
  UpdateFriendshipRequestPayload,
} from "src/features/Profile/Profile.d";
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

export const getUsersApi = (data: GetUsersRequestPayload) =>
  request.get(Endpoint.User.SEARCH, { params: data });

export const addLocationApi = (data: AddLocationRequestPayload) =>
  request.post(Endpoint.User.ADD_LOCATION, data);

export const getLocationsApi = () => request.get(Endpoint.User.GET_LOCATIONS);

export const getFeedApi = () => request.get(Endpoint.User.GET_FEED);

export const getPostsApi = (userId: GetPostsRequestPayload) =>
  request.get(replacePathParams(Endpoint.User.GET_POSTS, { userId }));

export const getChatsApi = () => request.get(Endpoint.User.GET_CHATS);

export const getMessagesApi = (peerId: GetMessagesRequestPayload) =>
  request.get(Endpoint.User.GET_CHATS, {
    params: { peerId },
  });

export const createMessageApi = (data: CreateMessageRequestPayload) =>
  request.post(Endpoint.User.CREATE_MESSAGE, data);

export const followApi = (followingId: FollowRequestPayload) =>
  request.post(Endpoint.User.FOLLOW, { followingId });

export const unfollowApi = (followingId: UnfollowRequestPayload) =>
  request.delete(Endpoint.User.UNFOLLOW, { data: { followingId } });

export const requestFriendshipApi = (
  receiverId: RequestFriendshipRequestPayload
) => request.post(Endpoint.User.REQUEST_FRIENDSHIP, { receiverId });

export const updateFriendshipApi = (data: UpdateFriendshipRequestPayload) =>
  request.patch(Endpoint.User.UPDATE_FRIENDSHIP, data);

export const removeFriendshipApi = (
  receiverId: RemoveFriendshipRequestPayload
) => request.delete(Endpoint.User.REMOVE_FRIENDSHIP, { data: { receiverId } });

export const getNotificationsApi = () =>
  request.get(Endpoint.User.GET_NOTIFICATIONS);

// Post

export const getCommentsApi = (postId: GetCommentsRequestPayload) =>
  request.get(replacePathParams(Endpoint.Post.GET_COMMENTS, { postId }));

// Init

export const initApi = () => request.get(Endpoint.INIT);
