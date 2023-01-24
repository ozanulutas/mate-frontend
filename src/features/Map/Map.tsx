import { useEffect, useRef, useState } from "react";
import { Map as OlMap, MapBrowserEvent, View } from "ol";
import { Coordinate } from "ol/coordinate";
import BaseEvent from "ol/events/Event";

import MapContext from "./MapContext";

type MapProps = {
  children: React.ReactNode;
  zoom?: number;
  center?: Coordinate;
  onSingleClick?: Function;
  events?: {
    type:
      | "change"
      | "click"
      | "dblclick"
      | "error"
      | "loadend"
      | "loadstart"
      | "moveend"
      | "movestart"
      | "pointerdrag"
      | "pointermove"
      | "postrender"
      | "singleclick";
    handler: (e: any) => any;
  }[];
};

function Map({ children, center = [0, 0], zoom = 2, events }: MapProps) {
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

    return () => {
      olMap.setTarget(undefined);
    };
  }, []);

  useEffect(() => {
    if (!events) {
      return;
    }

    events.forEach(({ type, handler }) => {
      map?.on(type as any, handler);
    });

    return () => {
      events.forEach(({ type, handler }) => {
        map?.un(type as any, handler);
      });
    };
  }, [events, map]);

  useEffect(() => {
    map?.getView().setZoom(zoom);
  }, [map, zoom]);

  useEffect(() => {
    map?.getView().setCenter(center);
  }, [center, map]);

  return (
    <MapContext.Provider value={{ map }}>
      <div ref={mapRef} style={{ width: "100%", height: 500 }}>
        {children}
      </div>
    </MapContext.Provider>
  );
}

export default Map;
