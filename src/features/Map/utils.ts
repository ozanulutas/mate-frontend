import { Collection, Feature } from "ol";
import { Coordinate } from "ol/coordinate";
import FeatureFormat from "ol/format/Feature";
import { Geometry, Point } from "ol/geom";
import { Vector as VectorSource } from "ol/source";
import { Icon, Style } from "ol/style";

type vectorSourceParams = {
  features?: Feature<Geometry>[] | Collection<Feature<Geometry>> | undefined;
  url?: string;
  format?: any; //FeatureFormat;
};

type createMarkerParams = {
  coordinates: Coordinate;
  id?: number | string;
};

export const vectorSource = ({ features, url, format }: vectorSourceParams) =>
  new VectorSource({ features, url, format });

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
