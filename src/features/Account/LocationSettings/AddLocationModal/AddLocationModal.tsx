import { Marker } from "src/features/Account/LocationSettings/LocationSettings.d";
import { Modal } from "src/features/AppModal/constants";

import AppModal from "src/features/AppModal";
import AddLocationMap from "./AddLocationMap";
import AddLocationForm from "./AddLocationForm";
import { useRef } from "react";

const FORM_ID = "add-location-form";

function AddLocationModal() {
  const markerRef = useRef(null as unknown as Marker);

  return (
    <AppModal
      modalKey={Modal.ADD_LOCATION_MODAL}
      title="Add New Location"
      text="Put the marker to the location you want to add."
      positiveText="Save"
      negativeText="Cancel"
      formId={FORM_ID}
    >
      <AddLocationMap markerRef={markerRef} />
      <AddLocationForm formId={FORM_ID} markerRef={markerRef} />
    </AppModal>
  );
}

export default AddLocationModal;
