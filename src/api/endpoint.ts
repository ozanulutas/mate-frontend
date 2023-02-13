export const Endpoint = {
  Auth: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
  },
  Category: {
    SEARCH: "/categories/search",
  },
  User: {
    GET: "/users/:userId",
    SEARCH: "/users/search",
    ADD_LOCATION: "/users/me/locations",
    GET_LOCATIONS: "/users/me/locations",
    GET_FEED: "/users/me/feed",
    GET_POSTS: "/users/:userId/posts",
    GET_CHATS: "/users/me/chats",
    CREATE_MESSAGE: "/users/me/messages",
    FOLLOW: "/users/me/followings",
    UNFOLLOW: "/users/me/followings",
    REQUEST_FRIENDSHIP: "/users/me/friends",
    REMOVE_FRIENDSHIP: "/users/me/friends",
    GET_NOTIFICATIONS: "/users/me/notifications",
  },
  Post: {
    GET_COMMENTS: "/posts/:postId/comments",
  },
  INIT: "/init",
};
