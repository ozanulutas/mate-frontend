import { useEffect, useRef } from "react";

import { Map as OlMap, View, Feature, Collection, Overlay } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, XYZ, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { fromLonLat, get } from "ol/proj";
import { Modify } from "ol/interaction.js";
import { Style, Icon } from "ol/style";
import { FullScreen } from "ol/control";
import BaseEvent from "ol/events/Event";

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // https://openlayers.org/en/latest/examples/modify-icon.html
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([0, 0])),
    });
    const iconStyle = new Style({
      image: new Icon({
        src: "https://docs.maptiler.com/openlayers/default-marker/marker-icon.png",
        anchor: [0.5, 1],
      }),
    });

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    const tileLayer = new TileLayer({
      source: new OSM(),
      zIndex: 0,
    });

    const modify = new Modify({
      hitDetection: vectorLayer,
      source: vectorSource,
    });

    const overlaySource = modify.getOverlay().getSource();

    const olMap = new OlMap({
      target: mapRef.current as HTMLElement,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [tileLayer, vectorLayer],
      controls: [new FullScreen({})],
      overlays: [],
    });

    iconFeature.setStyle(iconStyle);
    olMap.addInteraction(modify);

    modify.on(["modifystart", "modifyend"], function (evt) {
      console.log(evt);
      console.log(iconFeature.getGeometry()?.getCoordinates());

      mapRef.current!.style.cursor =
        evt.type === "modifystart" ? "grabbing" : "pointer";
    });

    overlaySource.on(
      ["addfeature", "removefeature"],
      function (evt: BaseEvent | Event) {
        mapRef.current!.style.cursor =
          evt.type === "addfeature" ? "pointer" : "";
      }
    );

    // // add marker
    // vectorSource.addFeature(createMarker(10, 10, 1));
    // vectorLayer.setStyle(iconStyle);
    // // endof add marker

    // // add interaction to marker
    // const dragInteraction = new Modify({
    //   features: new Collection([iconFeature]),
    // });
    // olMap.addInteraction(dragInteraction);
    // iconFeature.on("change", () => {
    //   console.log(
    //     "Feature Moved To:" + iconFeature.getGeometry()?.getCoordinates()
    //   );
    // });
    // // endof add interaction to marker

    // // popup
    // const popupOverlay = new Overlay({
    //   element: popupRef.current as HTMLElement,
    //   autoPan: {
    //     animation: {
    //       duration: 250,
    //     },
    //   },
    // });
    // olMap.addOverlay(popupOverlay);
    // olMap.on("pointermove", function (e) {
    //   const pixel = olMap.getEventPixel(e.originalEvent);
    //   const hit = olMap.hasFeatureAtPixel(pixel);
    //   if (hit) {
    //     //How to get all features you hover on.
    //     //const featureArray = olMap.getFeaturesAtPixel(pixel);

    //     popupOverlay.getElement()!.hidden = false;
    //     popupOverlay.setPosition(e.coordinate);
    //   } else {
    //     popupOverlay.getElement()!.hidden = true;
    //   }
    // });
    // // endof popup

    return () => olMap.setTarget(undefined);
  }, []);

  const createMarker = (lng = 0, lat = 0, id = 0) => {
    return new Feature({
      geometry: new Point(fromLonLat([lng, lat])),
      id: id,
    });
  };

  return (
    <>
      <div ref={popupRef}>Hello There</div>
      <div ref={mapRef} style={{ width: "100%", height: 500 }}></div>;
    </>
  );
}

export default Map;
