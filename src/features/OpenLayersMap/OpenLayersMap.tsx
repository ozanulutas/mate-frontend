import { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import { Coordinate } from "ol/coordinate";

import MapContext from "./MapContext";

type OpenLayersMapProps = {
  children: React.ReactNode;
  zoom: number;
  center: Coordinate;
};

function OpenLayersMap({ children, center, zoom }: OpenLayersMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map>();

  useEffect(() => {
    const olMap = new Map({
      target: mapRef.current as HTMLDivElement,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
      layers: [],
      controls: [],
      overlays: [],
    });

    olMap.setTarget(mapRef.current as HTMLDivElement);
    setMap(olMap);

    return () => olMap.setTarget(undefined);
  }, []);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.getView().setZoom(zoom);
  }, [zoom]);

  useEffect(() => {
    if (!map) {
      return;
    }

    map.getView().setCenter(center);
  }, [center]);

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} style={{ width: "100%", height: 500 }}>
        {children}
      </div>
    </MapContext.Provider>
  );
}

export default OpenLayersMap;
