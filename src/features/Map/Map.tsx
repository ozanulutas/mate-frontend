import { useEffect, useRef } from "react";

import { Map as OlMap, View, Feature } from "ol";
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

    var markerslayer = olMap.getLayers(); //get marker layer
    console.log(markerslayer.getArray()[1]);

    return () => olMap.setTarget(undefined);
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: 500 }}></div>;
}

export default Map;
