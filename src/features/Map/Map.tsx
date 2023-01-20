import { useEffect, useRef } from "react";

import { Map as OlMap, View, Feature, Collection, Overlay } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, XYZ, Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { fromLonLat, get } from "ol/proj";
import { Modify } from "ol/interaction.js";
import { Style, Icon, Circle, Fill } from "ol/style";
import { FullScreen } from "ol/control";
import BaseEvent from "ol/events/Event";
import { Coordinate } from "ol/coordinate";

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // https://openlayers.org/en/latest/examples/modify-icon.html
    const iconFeature = new Feature({
      geometry: new Point(fromLonLat([27.510416, 40.964406])),
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

    const modifyStyle = new Style({
      image: undefined,
    });

    const modify = new Modify({
      hitDetection: vectorLayer,
      source: vectorSource,
      style: modifyStyle,
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
    iconFeature.setId("me");
    olMap.addInteraction(modify);

    modify.on(["modifystart", "modifyend"], function (e) {
      if (e.type === "modifyend") {
        const [x, y]: any = iconFeature.getGeometry()?.getCoordinates();
        console.log([x, y]);
      }

      mapRef.current!.style.cursor =
        e.type === "modifystart" ? "grabbing" : "pointer";
    });

    overlaySource.on(
      ["addfeature", "removefeature"],
      function (e: BaseEvent | Event) {
        mapRef.current!.style.cursor = e.type === "addfeature" ? "pointer" : "";
      }
    );

    olMap.on("singleclick", (e) => {
      iconFeature.getGeometry()?.setCoordinates(e.coordinate);
    });

    // iconFeature.on("change", (e) => {
    //   console.log(e.type);
    // });

    // // add marker
    const vectorLayer2 = new VectorLayer({
      source: new VectorSource(),
    });
    olMap.addLayer(vectorLayer2);
    vectorLayer2
      .getSource()
      ?.addFeature(createMarker(6376876.214813311, -376435.31719746534, 1));
    vectorLayer2.setStyle(iconStyle);
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
    // https://openlayers.org/en/latest/examples/icon.html
    const popupOverlay = new Overlay({
      element: popupRef.current as HTMLElement,
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
    olMap.addOverlay(popupOverlay);
    olMap.on("pointermove", function (e) {
      const pixel = olMap.getEventPixel(e.originalEvent);
      const hit = olMap.hasFeatureAtPixel(pixel);

      if (hit) {
        console.log(olMap.getFeaturesAtPixel(pixel)[0].getId());
        if (olMap.getFeaturesAtPixel(pixel)[0].getId() === "me") {
          return;
        }
        //How to get all features you hover on.
        //const featureArray = olMap.getFeaturesAtPixel(pixel);

        popupOverlay.getElement()!.hidden = false;
        popupOverlay.setPosition(e.coordinate);
      } else {
        popupOverlay.getElement()!.hidden = true;
      }
    });
    // // endof popup

    return () => olMap.setTarget(undefined);
  }, []);

  const createMarker = (lng = 0, lat = 0, id = 0) => {
    return new Feature({
      geometry: new Point([lng, lat]),
      id,
    });
  };

  return (
    <>
      <div ref={popupRef}>Hello There</div>
      <div ref={mapRef} style={{ width: "100%", height: 500 }}></div>
    </>
  );
}

export default Map;
