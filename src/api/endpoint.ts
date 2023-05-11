export const Endpoint = {
  Auth: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  Category: {
    GET: "/categories",
  },
  User: {
    GET: "/users",
    UPDATE: "/users/me",
    FIND: "/users/:userId",
    ADD_LOCATION: "/users/me/locations",
    UPDATE_LOCATION: "/users/me/locations/:locationId",
    REMOVE_LOCATION: "/users/me/locations/:locationId",
    GET_LOCATIONS: "/users/me/locations",
    GET_FEED: "/users/me/feed",
    GET_POSTS: "/users/:userId/posts",
    CREATE_POST: "/users/me/posts",
    GET_CHATS: "/users/me/chats",
    GET_MESSAGES: "/users/me/messages",
    CREATE_MESSAGE: "/users/me/messages",
    UPDATE_MESSAGES: "/users/me/messages",
    FOLLOW: "/users/me/followings",
    UNFOLLOW: "/users/me/followings",
    REQUEST_FRIENDSHIP: "/users/me/friends",
    REMOVE_FRIENDSHIP: "/users/me/friends",
    UPDATE_FRIENDSHIP: "/users/me/friends",
    GET_FRIENDS: "/users/me/friends",
    GET_NOTIFICATIONS: "/users/me/notifications",
    UPDATE_NOTIFICATIONS: "/users/me/notifications",
    GET_NOTIFICATION_COUNT: "/users/me/notifications/count",
    GET_CATEGORIES: "/users/me/categories",
    ADD_CATEGORIES: "/users/me/categories",
    REMOVE_CATEGORY: "/users/me/categories/:userCategoryId",
  },
  Post: {
    GET_COMMENTS: "/posts/:postId/comments",
    CREATE_COMMENT: "/posts/:postId/comments",
  },
  Gender: {
    GET: "/genders",
  },
  INIT: "/init",
};
