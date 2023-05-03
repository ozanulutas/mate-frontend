import { ModalKey } from "src/components/Modal/constants";

import { Box } from "@mui/material";
import Modal from "src/components/Modal";
import Locations from "src/features/Account/LocationSettings/Locations";
import DistanceSlider from "../../DistanceSlider";

function SelectLocationModal() {
  return (
    <Modal modalKey={ModalKey.SELECT_LOCATION} title="Select Location">
      <Locations />
      <Box sx={{ mx: 4, my: 5 }}>
        <DistanceSlider />
      </Box>
    </Modal>
  );
}

export default SelectLocationModal;
