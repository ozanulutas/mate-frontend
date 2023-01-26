import authReducer from "src/features/Auth/slice";
import accountReducer from "src/features/Account/slice";
import searchReducer from "src/features/Search/slice";
import toastReducer from "src/features/Toast/slice";
import drawerReducer from "src/features/Drawer/slice";
import modalReducer from "src/features/Modal/slice";

export const rootReducer = {
  auth: authReducer,
  account: accountReducer,
  search: searchReducer,
  toast: toastReducer,
  drawer: drawerReducer,
  modal: modalReducer,
};
