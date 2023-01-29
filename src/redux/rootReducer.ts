import authReducer from "src/features/Auth/slice";
import accountReducer from "src/features/Account/slice";
import exploreReducer from "src/features/Explore/slice";
import toastReducer from "src/features/Toast/slice";
import drawerReducer from "src/components/Drawer/slice";
import modalReducer from "src/components/Modal/slice";

export const rootReducer = {
  auth: authReducer,
  account: accountReducer,
  explore: exploreReducer,
  toast: toastReducer,
  drawer: drawerReducer,
  modal: modalReducer,
};
