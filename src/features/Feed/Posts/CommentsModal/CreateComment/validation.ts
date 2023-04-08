import * as yup from "yup";

export const createCommentSchema = yup.object({
  text: yup.string().required(),
});

export type CreateCommentSchemaType = yup.InferType<typeof createCommentSchema>;
