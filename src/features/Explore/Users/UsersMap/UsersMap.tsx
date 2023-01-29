import GeoJSON from "ol/format/GeoJSON";
import { useSelector } from "react-redux";
import { Icon, Style } from "ol/style";

import { selectUsers } from "src/features/Explore/selectors";

import Map from "src/components/Map";
import TileLayer from "src/components/Map/Layers/TileLayer";
import Layers from "src/components/Map/Layers";
import Controls from "src/components/Map/Controls";
import FullScreenControl from "src/components/Map/Controls/FullScreenControl";
import VectorLayer from "src/components/Map/Layers/VectorLayer";
import { vectorSource } from "src/components/Map/utils";
import Overlays from "src/components/Map/Overlays";
import PopupOverlay from "src/components/Map/Overlays/PopupOverlay";
import ZoomControl from "src/components/Map/Controls/ZoomControl";

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
