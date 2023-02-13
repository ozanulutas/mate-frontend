import GeoJSON from "ol/format/GeoJSON";
import { Category } from "./category";

export interface User {
  id: number;
  username: string;
  info: string;
  age: number;
  categories: Category[];
  geojson: GeoJSON;
}
