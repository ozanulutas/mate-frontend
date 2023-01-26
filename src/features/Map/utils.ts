import { Collection, Feature } from "ol";
import { Coordinate } from "ol/coordinate";
import { Geometry, Point } from "ol/geom";
import { Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";

type vectorSourceParams = {
  features: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
};

type createMarkerParams = {
  coordinates: Coordinate;
  id?: any;
};

export const vectorSource = ({ features }: vectorSourceParams) =>
  new VectorSource({ features });

export const createMarker = ({ coordinates, id }: createMarkerParams) => {
  const iconStyle = new Style({
    image: new Icon({
      src: "https://docs.maptiler.com/openlayers/default-marker/marker-icon.png",
      anchor: [0.5, 1],
    }),
  });
  const iconFeature = new Feature({
    geometry: new Point(coordinates),
  });

  id && iconFeature.setId(id);
  iconFeature.setStyle(iconStyle);

  return iconFeature;
};