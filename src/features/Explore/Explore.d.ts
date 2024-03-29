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
  searchDistance: number;
  view: keyof typeof View;
}

export type GetCategoriesRequestPayload = {
  name: string;
  filterSelected?: boolean;
};

export type GetUsersRequestPayload = {
  lon: number;
  lat: number;
  categories: number[];
  distance: number;
};
