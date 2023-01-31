import { Error } from "src/api/api.d";
import { Status } from "src/constants";
import { Location } from "src/types";

export interface AccountState {
  locationSettings: {
    addLocation: {
      status: Status;
      reason: Error;
    };
    locations: {
      data: Location[];
      status: Status;
      reason: Error;
    };
  };
}

export type AddLocationRequestPayload = {
  name: string;
  coordinates: any;
};
