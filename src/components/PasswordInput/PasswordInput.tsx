import { useState } from "react";
import { ControllerRenderProps } from "react-hook-form";

import {
  VisibilityOff as VisibilityOffIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";

type PasswordInputProps = {
  field?: ControllerRenderProps<any, any>;
  errorMessage?: string;
  label: string;
} & Omit<OutlinedInputProps, "label">;

function PasswordInput({
  field,
  errorMessage,
  label,
  ...inputProps
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        {...field}
        type={showPassword ? "text" : "password"}
        label={label}
        error={!!errorMessage}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        }
        {...inputProps}
      />
      {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
    </FormControl>
  );
}

export default PasswordInput;
