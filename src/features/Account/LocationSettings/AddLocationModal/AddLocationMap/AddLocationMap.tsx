import { fromLonLat } from "ol/proj";

import { Marker } from "src/features/Account/LocationSettings/LocationSettings.d";

import Map from "src/features/Map";
import ModifyInteraction from "src/features/Map/Interactions/ModifyInteraction/ModifyInteraction";
import TileLayer from "src/features/Map/Layers/TileLayer";
import Layers from "src/features/Map/Layers";
import Controls from "src/features/Map/Controls";
import FullScreenControl from "src/features/Map/Controls/FullScreenControl";
import VectorLayer from "src/features/Map/Layers/VectorLayer";
import { createMarker, vectorSource } from "src/features/Map/utils";
import Interactions from "src/features/Map/Interactions";
import ZoomControl from "src/features/Map/Controls/ZoomControl";

type AddLocationMapProps = {
  markerRef: React.MutableRefObject<Marker>;
};

const AddLocationMap = ({ markerRef }: AddLocationMapProps) => {
  const iconCoordinates = fromLonLat([27.51029, 40.964498]);
  const iconFeature = createMarker({
    coordinates: iconCoordinates,
  });

  markerRef.current = iconFeature;

  return (
    <Map
      zoom={9}
      center={iconCoordinates}
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
        <VectorLayer source={vectorSource({ features: [iconFeature] })} />
      </Layers>
      <Interactions>
        <ModifyInteraction features={[iconFeature]} />
      </Interactions>

      <Controls>
        <FullScreenControl />
        <ZoomControl />
      </Controls>
    </Map>
  );
};

export default AddLocationMap;
