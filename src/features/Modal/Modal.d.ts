import { ModalKey } from "./constants";

export interface ModalState {
  keys: (keyof typeof ModalKey)[];
}
