import authReducer from "src/features/Auth/slice";
import searchReducer from "src/features/Search/slice";
import toastReducer from "src/features/Toast/slice";
import drawerReducer from "src/features/AppDrawer/slice";
import modalReducer from "src/features/AppModal/slice";

export const rootReducer = {
  auth: authReducer,
  search: searchReducer,
  toast: toastReducer,
  drawer: drawerReducer,
  modal: modalReducer,
};
