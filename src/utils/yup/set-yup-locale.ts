import { setLocale } from "yup";
import { FieldNameMap } from "./field-name-map";

export const setYupLocale = () =>
  setLocale({
    string: {
      email: "This field must be a valid email",
    },
    mixed: {
      required: ({ path }) => {
        return `${
          (FieldNameMap as Record<string, string>)[path]
        } is a required field`;
      },
    },
    number: {
      min: "Deve ser maior que ${min}",
    },
  });
