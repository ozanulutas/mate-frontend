import authReducer from "src/features/Auth/slice";
import searchReducer from "src/features/Search/slice";
import toastReducer from "src/features/Toast/slice";

export const rootReducer = {
  auth: authReducer,
  search: searchReducer,
  toast: toastReducer,
};
