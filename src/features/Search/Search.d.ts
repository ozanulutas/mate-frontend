import { Status } from "src/constants";

export interface Category {
  id: number;
  name: string;
}

export interface SearchState {
  categories: {
    status: Status;
    data: Category[];
    result: Record<string, any>;
  };
}

export type SearchCategoryRequestPayload = {
  name: string;
};
