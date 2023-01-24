import { useDispatch } from "react-redux";

import { toggleModal } from "src/features/AppModal/slice";
import { Modal } from "src/features/AppModal/constants";

import {
  LocationOn as LocationOnIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import AddLocationModal from "./AddLocationModal";

function LocationSettings() {
  const dispatch = useDispatch();

  return (
    <>
      <IconButton
        aria-label="add"
        onClick={() => dispatch(toggleModal(Modal.ADD_LOCATION_MODAL))}
      >
        <AddIcon fontSize="inherit" />
      </IconButton>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary="Ali Connors"
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Oui Oui" secondary="Sandra Adams" />
        </ListItem>
      </List>
      <AddLocationModal />
    </>
  );
}

export default LocationSettings;
