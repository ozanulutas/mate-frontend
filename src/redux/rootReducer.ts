import authReducer from "src/features/Auth/slice";
import accountReducer from "src/features/Account/slice";
import profileReducer from "src/features/Profile/slice";
import exploreReducer from "src/features/Explore/slice";
import feedReducer from "src/features/Feed/slice";
import chatReducer from "src/features/Chat/slice";

import toastReducer from "src/components/Toast/slice";
import drawerReducer from "src/components/Drawer/slice";
import modalReducer from "src/components/Modal/slice";

export const rootReducer = {
  auth: authReducer,
  account: accountReducer,
  profile: profileReducer,
  explore: exploreReducer,
  feed: feedReducer,
  chat: chatReducer,

  toast: toastReducer,
  drawer: drawerReducer,
  modal: modalReducer,
};
