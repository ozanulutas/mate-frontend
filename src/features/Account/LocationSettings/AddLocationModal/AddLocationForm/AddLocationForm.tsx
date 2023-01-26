import { useDispatch } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import { Marker } from "src/features/Account/LocationSettings/LocationSettings.d";
import { yupResolver } from "@hookform/resolvers/yup";
import { addLocationSchema, AddLocationSchemaType } from "./validation";

import { Box, TextField } from "@mui/material";
import { addLocationRequest } from "src/features/Account/slice";

type AddLocationFormProps = {
  markerRef: React.MutableRefObject<Marker>;
  formId: string;
};

const AddLocationForm = ({ formId, markerRef }: AddLocationFormProps) => {
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
    dispatch(
      addLocationRequest({
        name: data.name,
        latLon:
          markerRef.current?.getGeometry()?.getCoordinates().toString() ?? "",
      })
    );
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
            label="Location Name"
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
