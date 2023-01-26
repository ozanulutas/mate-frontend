import { Status } from "src/constants";
import { Error } from "src/api/api.d";

export interface Category {
  id: number;
  name: string;
}

export interface SearchState {
  categories: {
    status: Status;
    data: Category[];
    reason: Error;
  };
}

export type SearchCategoryRequestPayload = {
  name: string;
};
