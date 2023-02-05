import * as yup from "yup";

export const messageSchema = yup.object({
  message: yup.string().required(),
});

export type MessageSchemaType = yup.InferType<typeof messageSchema>;
