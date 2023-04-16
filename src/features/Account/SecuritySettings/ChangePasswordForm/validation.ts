import * as yup from "yup";

export const changePasswordSchema = yup.object({
  oldPassword: yup.string().required(),
  password: yup.string().required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

export type ChangePasswordSchemaType = yup.InferType<
  typeof changePasswordSchema
>;
