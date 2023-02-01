export interface GeoJSON {
  type: "Point";
  coordinates: [number, number];
}

export interface Location {
  id: number;
  name: string;
  geojson: GeoJSON;
}
