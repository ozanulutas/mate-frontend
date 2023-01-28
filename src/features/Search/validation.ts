import * as yup from "yup";

export const searchSchema = yup.object({
  categories: yup.array().min(1).required(),
  location: yup.number().required(),
});

export type SearchSchemaType = yup.InferType<typeof searchSchema>;
