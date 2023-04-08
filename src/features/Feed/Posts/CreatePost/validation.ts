import * as yup from "yup";

export const createPostSchema = yup.object({
  text: yup.string().required(),
});

export type CreatePostSchemaType = yup.InferType<typeof createPostSchema>;
