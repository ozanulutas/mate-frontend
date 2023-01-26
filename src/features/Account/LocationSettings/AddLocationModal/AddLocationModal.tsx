import { Marker } from "src/features/Account/LocationSettings/LocationSettings.d";
import { ModalKey } from "src/features/Modal/constants";

import Modal from "src/features/Modal";
import AddLocationMap from "./AddLocationMap";
import AddLocationForm from "./AddLocationForm";
import { useRef } from "react";

const FORM_ID = "add-location-form";

function AddLocationModal() {
  const markerRef = useRef(null as unknown as Marker);

  return (
    <Modal
      modalKey={ModalKey.ADD_LOCATION}
      title="Add New Location"
      text="Put the marker to the location you want to add."
      positiveText="Save"
      negativeText="Cancel"
      formId={FORM_ID}
    >
      <AddLocationMap markerRef={markerRef} />
      <AddLocationForm formId={FORM_ID} markerRef={markerRef} />
    </Modal>
  );
}

export default AddLocationModal;
