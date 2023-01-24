import { useContext, useEffect } from "react";
import { Collection, Feature } from "ol";
import { Modify } from "ol/interaction";
import BaseEvent from "ol/events/Event";
import { Style } from "ol/style";

import MapContext from "../../MapContext";

type ModifyInteractionProps = {
  features: Feature<any>[];
};

const ModifyInteraction = ({ features }: ModifyInteractionProps) => {
  const { map } = useContext(MapContext);

  useEffect(() => {
    const modifyStyle = new Style({
      image: undefined,
    });
    const modify = new Modify({
      features: new Collection(features),
      hitDetection: features[0]?.getGeometry()?.getLayout(),
      style: modifyStyle,
    });
    const overlaySource = modify.getOverlay().getSource();
    const mapViewport = map?.getViewport();

    modify.on(["modifystart", "modifyend"], (e) => {
      // if (e.type === "modifyend") {
      //   const [x, y]: any = iconFeature.getGeometry()?.getCoordinates();
      //   console.log([x, y]);
      // }
      mapViewport!.style.cursor =
        e.type === "modifystart" ? "grabbing" : "pointer";
    });

    overlaySource.on(
      ["addfeature", "removefeature"],
      (e: BaseEvent | Event) => {
        mapViewport!.style.cursor = e.type === "addfeature" ? "pointer" : "";
      }
    );

    map?.addInteraction(modify);

    // iconFeature.on("change", () => {
    //   console.log(
    //     "Feature Moved To:" + iconFeature.getGeometry()?.getCoordinates()
    //   );
    // });

    return () => {
      map?.removeInteraction(modify);
    };
  }, [features, map]);

  return null;
};

export default ModifyInteraction;
