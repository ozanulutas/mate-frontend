import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Marker } from "src/features/Account/LocationSettings/LocationSettings.d";
import { ModalKey } from "src/components/Modal/constants";
import { selectEditedLocation } from "../../selectors";

import Modal from "src/components/Modal";
import AddLocationMap from "./AddLocationMap";
import AddLocationForm from "./AddLocationForm";
import { resetEditedLocation } from "../../slice";

const FORM_ID = "add-location-form";

function AddLocationModal() {
  const dispatch = useDispatch();
  const markerRef = useRef(null as unknown as Marker);
  const { name, geojson, id } = useSelector(selectEditedLocation);

  const handleClose = () => {
    if (id) {
      dispatch(resetEditedLocation());
    }
  };

  return (
    <Modal
      modalKey={ModalKey.ADD_LOCATION}
      title={id ? "Update Location" : "Add New Location"}
      text="Put the marker to the location you want to add."
      positiveText="Save"
      negativeText="Cancel"
      formId={FORM_ID}
      onClose={handleClose}
    >
      <AddLocationMap
        markerRef={markerRef}
        coordinates={geojson?.coordinates}
      />
      <AddLocationForm
        formId={FORM_ID}
        markerRef={markerRef}
        locationId={id}
        name={name}
      />
    </Modal>
  );
}

export default AddLocationModal;
