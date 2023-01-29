import { useContext, useEffect, useRef } from "react";
import { Overlay } from "ol";

import MapContext from "../../MapContext";

function PopupOverlay() {
  const popupRef = useRef<HTMLDivElement>(null);
  const popupInfo = useRef("");
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

    let prevId: any = "";
    map?.on("pointermove", (e) => {
      const pixel = map?.getEventPixel(e.originalEvent);
      const hit = map?.hasFeatureAtPixel(pixel);

      if (!hit) {
        popupOverlay.getElement()!.hidden = true;
        prevId = "";
        return;
      }

      const [feature] = map?.getFeaturesAtPixel(pixel);
      const featureId = feature?.getId();

      if (featureId === "me") {
        return;
      }

      if (prevId !== featureId) {
        popupRef.current!.innerHTML = feature?.getProperties().username;
        popupRef.current!.hidden = false;
        prevId = feature.getId();
      }

      popupOverlay.setPosition(e.coordinate);
    });

    map?.addOverlay(popupOverlay);

    return () => {
      map?.removeOverlay(popupOverlay);
    };
  }, [map]);

  return <div ref={popupRef}>Hello</div>;
}

export default PopupOverlay;
