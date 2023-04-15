import { Status } from "src/constants";
import { Category, Location } from "src/types";

export interface AccountState {
  locationSettings: {
    addLocation: {
      status: Status;
    };
    updateLocation: {
      status: Status;
    };
    updateSelectedLocation: {
      status: Status;
    };
    removeLocation: {
      status: Status;
    };
    locations: {
      data: Location[];
      status: Status;
    };
    editedLocation: Omit<Location, "isSelected">;
    selectedLocationId: Location["id"];
  };
  categorySettings: {
    categories: {
      data: Category[];
      status: Status;
    };
    addCategories: {
      status: Status;
    };
    removeCategory: {
      status: Status;
    };
  };
}

export type AddLocationRequestPayload = {
  name: Location["name"];
  coordinates: Location["geojson"]["coordinates"];
};
export type UpdateLocationRequestPayload = {
  id: Location["id"];
} & Partial<AddLocationRequestPayload>;
export type RemoveLocationRequestPayload = Location["id"];

export type UpdateSelectedLocationRequestPayload = Location["id"];

export type AddCategoriesRequestPayload = { categoryIds: Category["id"][] };
export type RemoveCategoryRequestPayload = number;
