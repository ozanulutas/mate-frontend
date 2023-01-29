import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectLocations } from "../../selectors";

import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

function Locations() {
  const locations = useSelector(selectLocations);

  return (
    <List>
      {locations.map((location) => (
        <Fragment key={location.id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={location.name}
              secondary={location.geojson.coordinates}
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}

export default Locations;
