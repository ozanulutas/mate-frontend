import React from "react";
import { Map } from "ol";

interface MapContext {
  map: Map | undefined;
}

const initialContext: MapContext = {
  map: undefined,
};

export default React.createContext(initialContext);
