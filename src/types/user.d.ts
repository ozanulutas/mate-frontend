import GeoJSON from "ol/format/GeoJSON";

export interface User {
  id: number;
  username: string;
  categories: Category[];
  geojson: GeoJSON;
}
