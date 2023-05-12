import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getLocationsRequest } from "../slice";
import { toggleModal } from "src/components/Modal/slice";
import { ModalKey } from "src/components/Modal/constants";

import { Add as AddIcon } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import LocationFormModal from "./LocationFormModal";
import Locations from "./Locations";
import RemoveLocationConfirmationModal from "./RemoveLocationConfirmationModal";

function LocationSettings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationsRequest());
  }, [dispatch]);

  return (
    <>
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
      <LocationFormModal />
      <RemoveLocationConfirmationModal />
    </>
  );
}

export default LocationSettings;
