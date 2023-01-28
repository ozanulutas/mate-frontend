import { useSelector } from "react-redux";

import { selectLocations } from "src/features/Account/selectors";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

function LocationSelect() {
  const locations = useSelector(selectLocations);

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="location-select-label">Location</InputLabel>
      <Select
        labelId="location-select-label"
        label="Location"
        onChange={handleChange}
      >
        <MenuItem value={0}>Near Me</MenuItem>
        {locations.map((location) => (
          <MenuItem value={location.id}>{location.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LocationSelect;
