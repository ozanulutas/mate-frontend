import { Status } from "src/constants";

export interface AccountState {
  locationSettings: {
    addLocation: {
      status: Status;
      reason: Record<string, any>;
    };
  };
}

export type AddLocationRequestPayload = {
  name: string;
  latLon: string;
};
