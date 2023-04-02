import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectFeed = (state: RootState) => state.feed;

export const selectPosts = createSelector(
  selectFeed,
  (feed) => feed.posts.data
);

export const selectComments = createSelector(
  selectFeed,
  (feed) => feed.comments.data
);
