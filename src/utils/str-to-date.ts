type StrToDateOptions = {
  locale?: Intl.LocalesArgument;
  dateTimeFormatOptions?: Intl.DateTimeFormatOptions;
};

export const strToDate = (str: string, options = {} as StrToDateOptions) => {
  const { locale, dateTimeFormatOptions } = options;
  return new Date(str).toLocaleString(locale, dateTimeFormatOptions);
};
