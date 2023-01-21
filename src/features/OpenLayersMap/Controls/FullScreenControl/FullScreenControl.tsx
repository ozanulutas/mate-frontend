import { useContext, useEffect } from "react";
import { FullScreen } from "ol/control";

import MapContext from "../../MapContext";

function FullScreenControl() {
  const { map } = useContext(MapContext);

  useEffect(() => {
    const fullScreenControl = new FullScreen({});

    map?.addControl(fullScreenControl);

    return () => {
      map?.removeControl(fullScreenControl);
    };
  }, [map]);

  return null;
}

export default FullScreenControl;
