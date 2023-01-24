import { useContext, useEffect } from "react";
import { Zoom } from "ol/control";

import MapContext from "../../MapContext";

function ZoomControl() {
  const { map } = useContext(MapContext);

  useEffect(() => {
    const zoomControl = new Zoom();

    map?.addControl(zoomControl);

    return () => {
      map?.removeControl(zoomControl);
    };
  }, [map]);

  return null;
}

export default ZoomControl;
