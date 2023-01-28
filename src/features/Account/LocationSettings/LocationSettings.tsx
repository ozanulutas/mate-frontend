import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getLocationsRequest } from "../slice";
import { toggleModal } from "src/features/Modal/slice";
import { ModalKey } from "src/features/Modal/constants";

import { Add as AddIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AddLocationModal from "./AddLocationModal";
import Locations from "./Locations";

function LocationSettings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationsRequest());
  }, [dispatch]);

  return (
    <>
      {/* TODO: style add button */}
      <IconButton
        aria-label="add"
        onClick={() => dispatch(toggleModal(ModalKey.ADD_LOCATION))}
      >
        <AddIcon fontSize="inherit" />
      </IconButton>
      <Locations />
      <AddLocationModal />
    </>
  );
}

export default LocationSettings;
