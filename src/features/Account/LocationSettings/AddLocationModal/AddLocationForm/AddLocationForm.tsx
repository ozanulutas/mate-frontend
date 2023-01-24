import { useDispatch } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { addLocationSchema, AddLocationSchemaType } from "./validation";

import { Box, TextField } from "@mui/material";

type AddLocationFormProps = {
  submit: any;
};

function AddLocationForm({ submit }: AddLocationFormProps) {
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(addLocationSchema),
  });

  const onSubmit: SubmitHandler<AddLocationSchemaType> = (data) => {
    submit(data);
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            required
            fullWidth
            label="Address Name"
            autoFocus
            error={!!errors.name?.message}
            helperText={errors.name?.message}
          />
        )}
      />
    </Box>
  );
}

export default AddLocationForm;
