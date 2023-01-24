import { useDispatch } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Avatar, Box, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";

function GeneralSettings() {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
    // resolver: yupResolver(registerSchema),
  });

  // const onSubmit: SubmitHandler<RegisterSchemaType> = (data) => {};

  return (
    <Box
      component="form"
      noValidate
      // onSubmit={handleSubmit(onSubmit)}
      sx={{ mt: 3 }}
    >
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoComplete="email"
            autoFocus
            error={!!errors.email?.message}
            helperText={errors.email?.message}
          />
        )}
      />
    </Box>
  );
}

export default GeneralSettings;
