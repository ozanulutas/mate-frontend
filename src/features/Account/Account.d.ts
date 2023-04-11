import { Status } from "src/constants";
import { Location } from "src/types";

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
}

export type AddLocationRequestPayload = {
  name: Location["name"];
  coordinates: Location["geojson"]["coordinates"];
};

export type UpdateLocationRequestPayload = {
  id: Location["id"];
} & Partial<AddLocationRequestPayload>;

export type UpdateSelectedLocationRequestPayload = Location["id"];

export type RemoveLocationRequestPayload = Location["id"];
