import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/redux/store";

export const selectFriendshipState = (state: RootState) => state.friendship;

export const selectFriendshipRequestCount = createSelector(
  selectFriendshipState,
  (friendship) => friendship.friendshipRequestCount
);

export const selectFriendshipRequests = createSelector(
  selectFriendshipState,
  (friendship) => friendship.friendshipRequests.data
);
