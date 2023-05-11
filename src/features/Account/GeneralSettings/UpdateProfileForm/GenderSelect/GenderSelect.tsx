import { useSelector } from "react-redux";
import { ControllerRenderProps } from "react-hook-form";

import { selectGenders } from "src/features/Account/selectors";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

type GenderSelectProps = {
  field?: ControllerRenderProps<any, any>;
};

function GenderSelect({ field }: GenderSelectProps) {
  const genders = useSelector(selectGenders);

  return (
    <FormControl fullWidth>
      <InputLabel>Gender</InputLabel>
      <Select {...field} label="Gender">
        {genders.map((gender) => (
          <MenuItem key={gender.id} value={gender.id}>
            {gender.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default GenderSelect;
