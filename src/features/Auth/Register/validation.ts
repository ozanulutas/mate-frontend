import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

export type RegisterSchemaType = yup.InferType<typeof registerSchema>;
