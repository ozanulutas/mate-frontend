import { useDispatch, useSelector } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { addLocationSchema, AddLocationSchemaType } from "./validation";

import { Box, TextField } from "@mui/material";
import { selectLocationSettingsMarkerPosition } from "src/features/Account/selectors";

type AddLocationFormProps = {
  formId: string;
};

const AddLocationForm = ({ formId }: AddLocationFormProps) => {
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
    console.log(data);
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      id={formId}
    >
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
};

export default AddLocationForm;
