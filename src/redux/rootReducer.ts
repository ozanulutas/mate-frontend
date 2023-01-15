import authReducer from "src/features/Auth/slice";
import toastReducer from "src/features/Toast/slice";

export const rootReducer = {
  auth: authReducer,
  toast: toastReducer,
};
