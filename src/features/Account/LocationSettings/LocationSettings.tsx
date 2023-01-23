import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

function LocationSettings() {
  return (
    <>
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
    </>
  );
}

export default LocationSettings;
