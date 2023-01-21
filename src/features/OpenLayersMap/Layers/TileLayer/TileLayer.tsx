import { useContext, useEffect } from "react";
import { Tile as OlTileLayer } from "ol/layer";
import { OSM } from "ol/source";

import MapContext from "../../MapContext";

function TileLayer() {
  const { map } = useContext(MapContext);

  useEffect(() => {
    const tileLayer = new OlTileLayer({
      source: new OSM(),
      zIndex: 0,
    });

    map?.addLayer(tileLayer);

    return () => {
      map?.removeLayer(tileLayer);
    };
  }, [map]);

  return null;
}

export default TileLayer;
