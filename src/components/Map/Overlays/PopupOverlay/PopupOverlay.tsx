import { useContext, useEffect, useRef, useState } from "react";
import { Overlay } from "ol";

import MapContext from "../../MapContext";
import { Avatar, Card, CardHeader } from "@mui/material";

function PopupOverlay() {
  const { map } = useContext(MapContext);
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupInfo, setPopupInfo] = useState<{
    username: string;
    categories: any[];
  }>();

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

    let prevFeatureId: any = "";

    map?.on("pointermove", (e) => {
      const pixel = map?.getEventPixel(e.originalEvent);
      const hit = map?.hasFeatureAtPixel(pixel);

      if (!hit) {
        popupOverlay.getElement()!.hidden = true;
        prevFeatureId = "";
        return;
      }

      const [feature] = map?.getFeaturesAtPixel(pixel);
      const featureId = feature?.getId();

      if (featureId === "me") {
        return;
      }

      if (prevFeatureId !== featureId) {
        setPopupInfo(feature?.getProperties().user);
        popupRef.current!.hidden = false;
        prevFeatureId = featureId;
      }

      popupOverlay.setPosition(e.coordinate);
    });

    map?.addOverlay(popupOverlay);

    return () => {
      map?.removeOverlay(popupOverlay);
    };
  }, [map]);

  return (
    <Card ref={popupRef} sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={<Avatar>{popupInfo?.username[0]}</Avatar>}
        title={popupInfo?.username}
        subheader={popupInfo?.categories
          .map((category) => category.name)
          .join(", ")}
      />
    </Card>
  );
}

export default PopupOverlay;
