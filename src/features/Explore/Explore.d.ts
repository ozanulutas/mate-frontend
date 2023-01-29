import { Status } from "src/constants";
import { Error } from "src/api/api.d";

export interface Category {
  id: number;
  name: string;
}

export interface User {
  id: number;
  username: string;
  categories: string[];
  geojson: {
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
}

export type SearchCategoryRequestPayload = {
  name: string;
};

export type GetUsersRequestPayload = {
  lon: number;
  lat: number;
  categories: number[];
  distance: number;
};
