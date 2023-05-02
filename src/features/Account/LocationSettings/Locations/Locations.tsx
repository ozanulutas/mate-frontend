import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectLocations, selectSelectedLocationId } from "../../selectors";
import { updateSelectedLocationRequest } from "../../slice";

import { Divider, List, RadioGroup } from "@mui/material";
import Location from "./Location";

function Locations() {
  const dispatch = useDispatch();
  const locations = useSelector(selectLocations);
  const selectedLocationId = useSelector(selectSelectedLocationId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSelectedLocationRequest(+e.target.value));
  };

  return (
    <RadioGroup
      name="location"
      onChange={handleChange}
      value={selectedLocationId}
    >
      <List>
        {locations.map(({ geojson, id, name, isSelected }) => (
          <Fragment key={id}>
            <Location
              geojson={geojson}
              name={name}
              id={id}
              isSelected={isSelected}
            />
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
    </RadioGroup>
  );
}

export default Locations;
