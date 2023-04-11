import { Coordinate } from "ol/coordinate";

export interface GeoJSON {
  type: "Point";
  coordinates: Coordinate;
  // coordinates: [number, number];
}

export interface Location {
  id: number;
  name: string;
  geojson: GeoJSON;
  isSelected: boolean;
}
