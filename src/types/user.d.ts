import GeoJSON from "ol/format/GeoJSON";

export interface User {
  id: number;
  username: string;
  info: string;
  age: number;
  categories: Category[];
  geojson: GeoJSON;
}
