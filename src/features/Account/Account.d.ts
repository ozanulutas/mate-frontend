import { Error } from "src/api/api.d";
import { Status } from "src/constants";

interface Location {
  id: number;
  name: string;
  coordinates: any; // @TODO: type
}

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
