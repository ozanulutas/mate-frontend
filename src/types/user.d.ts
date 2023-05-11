import GeoJSON from "ol/format/GeoJSON";
import { Category } from "./category";

export interface Gender {
  id: number;
  name: string;
}

// @TODO: düzenle
export interface User {
  id: number;
  username: string;
  info: string;
  age: number;
  categories: Category[];
  geojson: GeoJSON;
  birthday?: Date;
  genderId?: Gender["id"];
  email: string;
  gsm?: string;
  countryCode?: string;
}
