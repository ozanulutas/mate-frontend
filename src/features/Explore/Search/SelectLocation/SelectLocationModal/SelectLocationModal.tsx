import { ModalKey } from "src/components/Modal/constants";

import Modal from "src/components/Modal";
import Locations from "src/features/Account/LocationSettings/Locations";

function SelectLocationModal() {
  return (
    <Modal modalKey={ModalKey.SELECT_LOCATION} title="Select Location">
      <Locations />
    </Modal>
  );
}

export default SelectLocationModal;
