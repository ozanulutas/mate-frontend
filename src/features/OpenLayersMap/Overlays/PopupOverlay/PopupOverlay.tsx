import { useContext, useEffect, useRef } from "react";
import { Overlay } from "ol";

import MapContext from "../../MapContext";

function PopupOverlay() {
  const popupRef = useRef<HTMLDivElement>(null);
  const { map } = useContext(MapContext);

  useEffect(() => {
    // https://openlayers.org/en/latest/examples/icon.html
    const popupOverlay = new Overlay({
      element: popupRef.current as HTMLElement,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });

    map?.on("pointermove", function (e) {
      const pixel = map?.getEventPixel(e.originalEvent);
      const hit = map?.hasFeatureAtPixel(pixel);

      if (hit) {
        if (map?.getFeaturesAtPixel(pixel)[0].getId() === "me") {
          return;
        }
        //How to get all features you hover on.
        //const featureArray = map?.getFeaturesAtPixel(pixel);

        popupOverlay.getElement()!.hidden = false;
        popupOverlay.setPosition(e.coordinate);
      } else {
        popupOverlay.getElement()!.hidden = true;
      }
    });

    map?.addOverlay(popupOverlay);

    return () => {
      map?.removeOverlay(popupOverlay);
    };
  }, [map]);

  return <div ref={popupRef}>Hello There</div>;
}

export default PopupOverlay;
