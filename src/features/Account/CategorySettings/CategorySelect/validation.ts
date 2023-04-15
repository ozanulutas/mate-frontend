import * as yup from "yup";

export const addCategorySchema = yup.object({
  categories: yup.array().min(1).required(),
});

export type AddCategorySchemaType = yup.InferType<typeof addCategorySchema>;
