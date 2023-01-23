import { Modal } from "./constants";

export interface ModalState {
  keys: (keyof typeof Modal)[];
}
