import { fromLonLat } from "ol/proj";

import { Marker } from "src/features/Account/LocationSettings/LocationSettings.d";
import { Location } from "src/types";

import Map from "src/components/Map";
import ModifyInteraction from "src/components/Map/Interactions/ModifyInteraction/ModifyInteraction";
import TileLayer from "src/components/Map/Layers/TileLayer";
import Layers from "src/components/Map/Layers";
import Controls from "src/components/Map/Controls";
import FullScreenControl from "src/components/Map/Controls/FullScreenControl";
import VectorLayer from "src/components/Map/Layers/VectorLayer";
import { createMarker, vectorSource } from "src/components/Map/utils";
import Interactions from "src/components/Map/Interactions";
import ZoomControl from "src/components/Map/Controls/ZoomControl";

type LocationMapProps = {
  markerRef: React.MutableRefObject<Marker>;
  coordinates: Location["geojson"]["coordinates"];
};

const LocationMap = ({ markerRef, coordinates }: LocationMapProps) => {
  const iconCoordinates = fromLonLat(coordinates ?? [27.51029, 40.964498]);
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

export default LocationMap;
