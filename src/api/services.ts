import { FriendshipStatus } from "src/constants";
import {
  AddCategoriesRequestPayload,
  AddLocationRequestPayload,
  ChangePasswordRequestPayload,
  RemoveCategoryRequestPayload,
  RemoveLocationRequestPayload,
  UpdateLocationRequestPayload,
  UpdateProfileRequestPayload,
} from "src/features/Account/Account.d";
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
import {
  CreateCommentRequestPayload,
  CreatePostRequestPayload,
  GetCommentsRequestPayload,
} from "src/features/Feed/Feed.d";
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
  GetFriendsRequestPayload,
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

export const categorySearchApi = (params: GetCategoriesRequestPayload) =>
  request.get(Endpoint.Category.GET, {
    params,
  });

export const getCategoriesApi = () => request.get(Endpoint.User.GET_CATEGORIES);

export const addCategoriesApi = (data: AddCategoriesRequestPayload) =>
  request.post(Endpoint.User.ADD_CATEGORIES, data);

export const removeCategoryApi = (
  userCategoryId: RemoveCategoryRequestPayload
) =>
  request.delete(
    replacePathParams(Endpoint.User.REMOVE_CATEGORY, { userCategoryId })
  );

// User

export const getUserApi = (userId: GetUserRequestPayload) =>
  request.get(replacePathParams(Endpoint.User.FIND, { userId }));

export const getUsersApi = (params: GetUsersRequestPayload) =>
  request.get(Endpoint.User.GET, { params });

export const changePasswordApi = (data: ChangePasswordRequestPayload) =>
  request.patch(Endpoint.User.UPDATE, data);

export const updateProfileApi = (data: UpdateProfileRequestPayload) =>
  request.patch(Endpoint.User.UPDATE, data);

// Locations

export const addLocationApi = (data: AddLocationRequestPayload) =>
  request.post(Endpoint.User.ADD_LOCATION, data);

export const updateLocationApi = ({
  id,
  ...data
}: UpdateLocationRequestPayload) =>
  request.patch(
    replacePathParams(Endpoint.User.UPDATE_LOCATION, { locationId: id }),
    data
  );

export const removeLocationApi = (locationId: RemoveLocationRequestPayload) =>
  request.delete(
    replacePathParams(Endpoint.User.REMOVE_LOCATION, { locationId })
  );

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

export const getFriendsApi = (params: GetFriendsRequestPayload) =>
  request.get(Endpoint.User.GET_FRIENDS, { params });

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

export const createCommentApi = ({
  postId,
  ...data
}: CreateCommentRequestPayload) =>
  request.post(
    replacePathParams(Endpoint.Post.CREATE_COMMENT, { postId }),
    data
  );

export const getPostsApi = (userId: GetPostsRequestPayload) =>
  request.get(replacePathParams(Endpoint.User.GET_POSTS, { userId }));

export const createPostApi = (data: CreatePostRequestPayload) =>
  request.post(Endpoint.User.CREATE_POST, data);

export const getFeedApi = () => request.get(Endpoint.User.GET_FEED);

// Genders

export const getGendersApi = () => request.get(Endpoint.Gender.GET);

// Init

export const initApi = () => request.get(Endpoint.INIT);
