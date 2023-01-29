import { useContext, useEffect } from "react";
import { Vector as OlVectorLayer } from "ol/layer";
import { Vector as OlVectorSource } from "ol/source";
import { Geometry } from "ol/geom";
import { StyleLike } from "ol/style/Style";
import { FlatStyleLike } from "ol/style/flat";

import MapContext from "../../MapContext";

type VectorLayerProps = {
  source: OlVectorSource<Geometry> | undefined;
  style?: StyleLike | FlatStyleLike | null | undefined;
};

function VectorLayer({ source, style }: VectorLayerProps) {
  const { map } = useContext(MapContext);

  useEffect(() => {
    const vectorLayer = new OlVectorLayer({
      source,
      style,
    });

    map?.addLayer(vectorLayer);

    return () => {
      map?.removeLayer(vectorLayer);
    };
  }, [map, source, style]);

  return null;
}

export default VectorLayer;
