import { ToastType } from "./constants";

export interface ToastState {
  isOpen: boolean;
  text: string;
  type: ToastType;
}
