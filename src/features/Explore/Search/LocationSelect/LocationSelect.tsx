import { useSelector } from "react-redux";
import { ControllerRenderProps } from "react-hook-form";

import { selectLocations } from "src/features/Account/selectors";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SxProps,
} from "@mui/material";

type LocationSelectProps = {
  distanceSlider: React.ReactNode;
  sx?: SxProps;
  field: ControllerRenderProps<any, any>;
  error?: string;
};

const LocationSelect = ({
  distanceSlider,
  sx,
  field,
  error,
}: LocationSelectProps) => {
  const locations = useSelector(selectLocations);

  return (
    <FormControl error={!!error} sx={sx}>
      <InputLabel id="location-select-label">Location</InputLabel>
      <Select {...field} labelId="location-select-label" label="Location">
        {distanceSlider}
        <MenuItem value={0}>Current Location</MenuItem>
        {locations.map((location) => (
          <MenuItem
            key={location.id}
            value={JSON.stringify(location.geojson.coordinates)}
          >
            {location.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default LocationSelect;
