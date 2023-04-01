import authReducer from "src/features/Auth/slice";
import appConfigReducer from "src/features/AppConfig/slice";
import accountReducer from "src/features/Account/slice";
import profileReducer from "src/features/Profile/slice";
import exploreReducer from "src/features/Explore/slice";
import feedReducer from "src/features/Feed/slice";
import chatReducer from "src/features/Chat/slice";
import notificationsReducer from "src/features/Notifications/slice";
import friendshipReducer from "src/features/Friendship/slice";

import toastReducer from "src/components/Toast/slice";
import drawerReducer from "src/components/Drawer/slice";
import modalReducer from "src/components/Modal/slice";

export const rootReducer = {
  appConfig: appConfigReducer,
  auth: authReducer,
  account: accountReducer,
  profile: profileReducer,
  explore: exploreReducer,
  feed: feedReducer,
  chat: chatReducer,
  notifications: notificationsReducer,
  friendship: friendshipReducer,

  toast: toastReducer,
  drawer: drawerReducer,
  modal: modalReducer,
};
