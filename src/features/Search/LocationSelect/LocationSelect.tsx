import { useSelector } from "react-redux";
import { ControllerRenderProps } from "react-hook-form";

import { selectLocations } from "src/features/Account/selectors";

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import { Box, SxProps } from "@mui/system";

type LocationSelectProps = {
  sx?: SxProps;
  field: ControllerRenderProps<any, any>;
  error?: string;
};

const LocationSelect = ({ sx, field, error }: LocationSelectProps) => {
  const locations = useSelector(selectLocations);

  return (
    <FormControl error={!!error} sx={sx}>
      <InputLabel id="location-select-label">Location</InputLabel>
      <Select {...field} labelId="location-select-label" label="Location">
        <Box sx={{ mx: 4, my: 5 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={30}
            // getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
        </Box>
        <MenuItem value={0}>Current Location</MenuItem>
        {locations.map((location) => (
          <MenuItem value={location.id}>{location.name}</MenuItem>
        ))}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default LocationSelect;
