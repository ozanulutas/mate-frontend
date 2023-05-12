import SelectLocationButton from "./SelectLocationButton";
import SelectLocationModal from "./SelectLocationModal";
import LocationFormModal from "src/features/Account/LocationSettings/LocationFormModal";
import RemoveLocationConfirmationModal from "src/features/Account/LocationSettings/RemoveLocationConfirmationModal";

const SelectLocation = () => {
  return (
    <>
      <SelectLocationButton />
      <SelectLocationModal />
      <LocationFormModal />
      <RemoveLocationConfirmationModal />
    </>
  );
};

export default SelectLocation;
