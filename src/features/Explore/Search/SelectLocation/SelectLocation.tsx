import SelectLocationButton from "./SelectLocationButton";
import SelectLocationModal from "./SelectLocationModal";
import AddLocationModal from "src/features/Account/LocationSettings/AddLocationModal";
import RemoveLocationConfirmationModal from "src/features/Account/LocationSettings/RemoveLocationConfirmationModal";

const SelectLocation = () => {
  return (
    <>
      <SelectLocationButton />
      <SelectLocationModal />
      <AddLocationModal />
      <RemoveLocationConfirmationModal />
    </>
  );
};

export default SelectLocation;
