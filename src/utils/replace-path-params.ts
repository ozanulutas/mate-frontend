type PathParams = Record<string, string | number | boolean>;

const replacePathParams = (path = "", paramsObject = {} as PathParams) =>
  Object.keys(paramsObject).reduce((acc, paramKey) => {
    const regex = new RegExp(`:${paramKey}`, "ig");

    return acc.replace(regex, paramsObject[paramKey]?.toString());
  }, path);

export { replacePathParams };
