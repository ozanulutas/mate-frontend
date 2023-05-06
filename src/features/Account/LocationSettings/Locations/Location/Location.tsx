import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Location as ILocation } from "src/types";
import {
  removeLocationRequest,
  setEditedLocation,
  setSelectedLocation,
} from "src/features/Account/slice";
import { toggleModal } from "src/components/Modal/slice";
import { ModalKey } from "src/components/Modal/constants";

import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import LocationRadio from "../LocationRadio/LocationRadio";

type LocationProps = ILocation;

function Location({ geojson, name, id, isSelected }: LocationProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSelected) {
      dispatch(setSelectedLocation({ id, name }));
    }
  }, [dispatch, id, isSelected, name]);

  const handleEditClick = () => {
    dispatch(setEditedLocation({ geojson, name, id }));
    dispatch(toggleModal(ModalKey.ADD_LOCATION));
  };

  const handleDeleteClick = () => {
    dispatch(toggleModal(ModalKey.REMOVE_LOCATION_CONFIRMATION));
    dispatch(removeLocationRequest(id));
  };

  return (
    <ListItem sx={{ ":hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }}>
      <FormControlLabel
        sx={{ width: "100%", ml: 0 }}
        value={id}
        control={<LocationRadio />}
        label={
          <ListItemText primary={name} secondary={geojson.coordinates.join()} />
        }
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="edit" onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Location;
