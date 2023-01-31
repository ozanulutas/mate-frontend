import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { Category, User } from "src/types";
import { View } from "./constants";

export interface ExploreState {
  categories: {
    status: Status;
    data: Category[];
    reason: Error;
  };
  users: {
    status: Status;
    data: User[];
    reason: Error;
  };
  selectedCategories: Category["id"][];
  view: keyof typeof View;
}

export type GetCategoriesRequestPayload = {
  name: string;
};

export type GetUsersRequestPayload = {
  lon: number;
  lat: number;
  categories: number[];
  distance: number;
};
