import { useEffect, useRef, useState } from "react";
import { Map as OlMap, View } from "ol";
import { Coordinate } from "ol/coordinate";

import MapContext from "./MapContext";

type OpenLayersMapProps = {
  children: React.ReactNode;
  zoom?: number;
  center?: Coordinate;
};

function OpenLayersMap({
  children,
  center = [0, 0],
  zoom = 2,
}: OpenLayersMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<OlMap>();

  useEffect(() => {
    const olMap = new OlMap({
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
    map?.getView().setZoom(zoom);
  }, [zoom]);

  useEffect(() => {
    map?.getView().setCenter(center);
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
