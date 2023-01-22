import { Drawer } from "./constants";

export interface DrawerState {
  key: keyof typeof Drawer | string;
}
