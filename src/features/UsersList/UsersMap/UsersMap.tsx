import GeoJSON from "ol/format/GeoJSON";

import { selectUsers } from "src/features/Search/selectors";

import Map from "src/features/Map";
import TileLayer from "src/features/Map/Layers/TileLayer";
import Layers from "src/features/Map/Layers";
import Controls from "src/features/Map/Controls";
import FullScreenControl from "src/features/Map/Controls/FullScreenControl";
import VectorLayer from "src/features/Map/Layers/VectorLayer";
import { vectorSource } from "src/features/Map/utils";
import Overlays from "src/features/Map/Overlays";
import PopupOverlay from "src/features/Map/Overlays/PopupOverlay";
import ZoomControl from "src/features/Map/Controls/ZoomControl";
import { useSelector } from "react-redux";
import { Icon, Style } from "ol/style";

function UsersMap() {
  const users = useSelector(selectUsers);

  const features = {
    type: "FeatureCollection",
    features: users.map(({ geojson, username }, i) => ({
      type: "Feature",
      id: i,
      geometry: geojson,
      properties: {
        username,
      },
    })),
  };

  return (
    <Map>
      <Layers>
        <TileLayer />
        <VectorLayer
          source={vectorSource({
            features: new GeoJSON().readFeatures(features, {
              featureProjection: "EPSG:3857",
            }),
          })}
          style={
            new Style({
              image: new Icon({
                src: "https://docs.maptiler.com/openlayers/default-marker/marker-icon.png",
                anchor: [0.5, 1],
              }),
            })
          }
        />
      </Layers>
      <Overlays>
        <PopupOverlay />
      </Overlays>
      <Controls>
        <FullScreenControl />
        <ZoomControl />
      </Controls>
    </Map>
  );
}

export default UsersMap;
