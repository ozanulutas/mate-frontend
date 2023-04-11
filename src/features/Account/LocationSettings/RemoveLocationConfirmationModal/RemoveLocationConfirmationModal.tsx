import { ModalKey } from "src/components/Modal/constants";

import Modal from "src/components/Modal/Modal";

function RemoveLocationConfirmationModal() {
  return (
    <Modal
      modalKey={ModalKey.REMOVE_LOCATION_CONFIRMATION}
      title="Are You Sure"
      positiveText="Remove"
      negativeText="Cancel"
      displayClose={false}
      disableEscapeKeyDown
      disableBackdropClick
    >
      Are you sure you want to remove this location?
    </Modal>
  );
}

export default RemoveLocationConfirmationModal;
