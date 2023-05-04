import { useDispatch } from "react-redux";

import { ModalKey } from "src/components/Modal/constants";
import { toggleModal } from "src/components/Modal/slice";

import { Add as AddIcon } from "@mui/icons-material";
import { Box, IconButton, Button } from "@mui/material";
import Modal from "src/components/Modal";
import Locations from "src/features/Account/LocationSettings/Locations";
import DistanceSlider from "../../DistanceSlider";

function SelectLocationModal() {
  const dispatch = useDispatch();

  return (
    <Modal modalKey={ModalKey.SELECT_LOCATION} title="Select Location">
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          aria-label="add"
          onClick={() => dispatch(toggleModal(ModalKey.ADD_LOCATION))}
          startIcon={<AddIcon fontSize="inherit" />}
        >
          Add Location
        </Button>
      </Box>
      <Locations />
      <Box sx={{ mx: 4, my: 5 }}>
        <DistanceSlider />
      </Box>
    </Modal>
  );
}

export default SelectLocationModal;
