export interface User {
  id: number;
  username: string;
  categories: Category[];
  geojson: {
    // @TODO: move geojson to shared types
    type: "Point";
    coordinates: [number, number];
  };
}
