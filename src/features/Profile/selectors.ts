import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectProfile = (state: RootState) => state.profile;

export const selectUser = createSelector(
  selectProfile,
  (profile) => profile.user.data
);

export const selectUserProfileId = createSelector(
  selectUser,
  (user) => user.id
);

export const selectIsFollowedByMe = createSelector(
  selectUser,
  (user) => user.isFollowedByMe
);

export const selectFriendshipStatusWithMe = createSelector(
  selectUser,
  (user) => user.friendshipStatusWithMe
);

export const selectPosts = createSelector(
  selectProfile,
  (profile) => profile.posts.data
);
