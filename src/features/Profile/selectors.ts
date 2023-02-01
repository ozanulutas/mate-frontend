import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectProfile = (state: RootState) => state.profile;

export const selectUser = createSelector(
  selectProfile,
  (profile) => profile.user.data
);

export const selectPosts = createSelector(
  selectProfile,
  (profile) => profile.posts.data
);
