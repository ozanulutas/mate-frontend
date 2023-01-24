import * as yup from "yup";

export const addLocationSchema = yup.object({
  name: yup.string().required(),
});

export type AddLocationSchemaType = yup.InferType<typeof addLocationSchema>;
