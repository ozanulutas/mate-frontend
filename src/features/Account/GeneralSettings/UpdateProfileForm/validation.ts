import * as yup from "yup";

export const updateProfileSchema = yup.object({
  email: yup.string().email().required(),
  genderId: yup.number().nullable(),
  gsm: yup.string().nullable(),
  countryCode: yup.string().nullable(),
  birthday: yup.mixed().nullable(),
  // birthday: yup.mixed().oneOf([yup.date(), yup.string()]).optional(),
});

export type UpdateProfileSchemaType = yup.InferType<typeof updateProfileSchema>;
