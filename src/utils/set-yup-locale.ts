import { setLocale } from "yup";

export const FormInputNameMap = {
  username: "User name",
  password: "Password",
  email: "E-mail",
};

export const setYupLocale = () =>
  setLocale({
    string: {
      email: "This field must be a valid email",
    },
    mixed: {
      required: ({ path }) => {
        return `${
          (FormInputNameMap as Record<string, string>)[path]
        } is a required field`;
      },
    },
    number: {
      min: "Deve ser maior que ${min}",
    },
  });
