import { Status } from "src/constants";
import { Category, Gender, Location } from "src/types";

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
    selectedLocation: Pick<Location, "id" | "name">;
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
  securitySettings: {
    changePassword: {
      status: Status;
    };
  };
  generalSettings: {
    updateProfile: {
      status: Status;
    };
    genders: {
      data: Gender[];
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

export type ChangePasswordRequestPayload = {
  password: string;
  oldPassword: string;
};

export type UpdateProfileRequestPayload = Pick<
  User,
  "email" | "gsm" | "countryCode" | "birthday" | "genderId"
>;
