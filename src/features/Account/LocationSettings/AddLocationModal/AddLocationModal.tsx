import { Modal } from "src/features/AppModal/constants";

import AppModal from "src/features/AppModal";
import AddLocationMap from "./AddLocationMap";
import AddLocationForm from "./AddLocationForm";

function AddLocationModal() {
  const handleFormSubmit = (data: any) => {
    console.log("heyy", data);
  };

  return (
    <AppModal
      modalKey={Modal.ADD_LOCATION_MODAL}
      text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
      title="Use Google's location service?"
      positiveText="Agree"
      negativeText="DisAgree"
      onPositiveClick={handleFormSubmit}
    >
      <AddLocationMap />
      <AddLocationForm submit={handleFormSubmit} />
    </AppModal>
  );
}

export default AddLocationModal;
