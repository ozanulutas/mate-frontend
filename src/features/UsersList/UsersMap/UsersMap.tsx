import { fromLonLat } from "ol/proj";

import OpenLayersMap from "src/features/OpenLayersMap/OpenLayersMap";
import ModifyInteraction from "src/features/OpenLayersMap/Interactions/ModifyInteraction/ModifyInteraction";
import TileLayer from "src/features/OpenLayersMap/Layers/TileLayer";
import Layers from "src/features/OpenLayersMap/Layers";
import Controls from "src/features/OpenLayersMap/Controls";
import FullScreenControl from "src/features/OpenLayersMap/Controls/FullScreenControl";
import VectorLayer from "src/features/OpenLayersMap/Layers/VectorLayer";
import { createMarker, vectorSource } from "src/features/OpenLayersMap/utils";
import Interactions from "src/features/OpenLayersMap/Interactions";
import Overlays from "src/features/OpenLayersMap/Overlays";
import PopupOverlay from "src/features/OpenLayersMap/Overlays/PopupOverlay";

function UsersMap() {
  const iconFeature = createMarker({ coordinates: [0, 0], id: "me" });
  const iconFeature2 = createMarker({
    coordinates: fromLonLat([27.51029, 40.964498]),
  });

  return (
    <OpenLayersMap>
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
      </Controls>
    </OpenLayersMap>
  );
}

export default UsersMap;
