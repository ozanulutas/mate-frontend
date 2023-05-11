import { useEffect, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

import countries from "src/constants/countries.json";

import { Box, TextField, Autocomplete } from "@mui/material";

type CountrySelectProps = {
  field: ControllerRenderProps<any, any>;
};

type Country = {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
};

function CountrySelect({ field }: CountrySelectProps) {
  const [value, setValue] = useState<Country | undefined | null>(null);

  useEffect(() => {
    setValue(countries.find((country) => country.phone === field.value));
  }, [field.value]);

  const onChange = (
    e: React.SyntheticEvent<Element, Event>,
    val: Country | null
  ) => {
    field.onChange(val?.phone);
    setValue(value);
  };

  return (
    <Autocomplete
      {...field}
      autoHighlight
      options={countries}
      value={value}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label="Country Code" />}
      getOptionLabel={(option) => `+${option.phone}`}
      renderOption={(props, option) => (
        <Box
          {...props}
          component="li"
          sx={{ "& > img": { mr: 1, flexShrink: 0 } }}
          key={option.code}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          +{option.phone} ({option.code})
        </Box>
      )}
      sx={{ width: 200 }}
    />
  );
}

export default CountrySelect;
