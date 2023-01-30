import { Status } from "src/constants";
import { Error } from "src/api/api.d";
import { View } from "./constants";

// @TODO: move Category to shared types
export interface Category {
  id: number;
  name: string;
}

// @TODO: move User to shared types
export interface User {
  id: number;
  username: string;
  categories: Category[];
  geojson: {
    // @TODO: move geojson to shared types
    type: "Point";
    coordinates: [number, number];
  };
}

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
