import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectFeed = (state: RootState) => state.feed;

export const selectPosts = createSelector(
  selectFeed,
  (feed) => feed.posts.data
);

export const selectCreatePostStatus = createSelector(
  selectFeed,
  (feed) => feed.createPost.status
);

export const selectComments = createSelector(
  selectFeed,
  (feed) => feed.comments.data
);

export const selectCreateCommentStatus = createSelector(
  selectFeed,
  (feed) => feed.createComment.status
);

export const selectSelectedPostId = createSelector(
  selectFeed,
  (feed) => feed.selectedPostId
);
