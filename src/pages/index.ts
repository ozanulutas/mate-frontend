import { lazy } from "react";

export const ExplorePage = lazy(() => import("./ExplorePage"));
export const ProfilePage = lazy(() => import("./ProfilePage"));

export const AccountPage = lazy(() => import("./AccountPage"));
export const GeneralSettingsPage = lazy(() => import("./GeneralSettingsPage"));
export const SecuritySettingsPage = lazy(
  () => import("./SecuritySettingsPage")
);
export const LocationSettingsPage = lazy(
  () => import("./LocationSettingsPage")
);
export const CategorySettingsPage = lazy(
  () => import("./CategorySettingsPage")
);

export const LoginPage = lazy(() => import("./LoginPage"));
export const RegisterPage = lazy(() => import("./RegisterPage"));

export { default as ErrorPage } from "./ErrorPage";
