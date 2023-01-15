export enum ToastType {
  SUCCESS,
  INFO,
  WARNING,
  ERROR,
}

export const AlertSeverity = {
  [ToastType.SUCCESS]: "success",
  [ToastType.INFO]: "info",
  [ToastType.WARNING]: "warning",
  [ToastType.ERROR]: "error",
} as const;
