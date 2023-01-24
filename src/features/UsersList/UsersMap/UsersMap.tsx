import { fromLonLat } from "ol/proj";

import Map from "src/features/Map";
import ModifyInteraction from "src/features/Map/Interactions/ModifyInteraction/ModifyInteraction";
import TileLayer from "src/features/Map/Layers/TileLayer";
import Layers from "src/features/Map/Layers";
import Controls from "src/features/Map/Controls";
import FullScreenControl from "src/features/Map/Controls/FullScreenControl";
import VectorLayer from "src/features/Map/Layers/VectorLayer";
import { createMarker, vectorSource } from "src/features/Map/utils";
import Interactions from "src/features/Map/Interactions";
import Overlays from "src/features/Map/Overlays";
import PopupOverlay from "src/features/Map/Overlays/PopupOverlay";
import ZoomControl from "src/features/Map/Controls/ZoomControl";

function UsersMap() {
  const iconFeature = createMarker({ coordinates: [0, 0], id: "me" });
  const iconFeature2 = createMarker({
    coordinates: fromLonLat([27.51029, 40.964498]),
  });

  return (
    <Map
      events={[
        {
          type: "singleclick",
          handler(e) {
            iconFeature.getGeometry()?.setCoordinates(e.coordinate);
          },
        },
      ]}
    >
      <Layers>
        <TileLayer />
        <VectorLayer
          source={vectorSource({ features: [iconFeature, iconFeature2] })}
        />
      </Layers>
      <Interactions>
        <ModifyInteraction features={[iconFeature]} />
      </Interactions>
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
