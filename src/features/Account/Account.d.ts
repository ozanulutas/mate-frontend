import { Error } from "src/api/api.d";
import { Status } from "src/constants";

export interface AccountState {
  locationSettings: {
    addLocation: {
      status: Status;
      reason: Error;
    };
  };
}

export type AddLocationRequestPayload = {
  name: string;
  latLon: string;
};
