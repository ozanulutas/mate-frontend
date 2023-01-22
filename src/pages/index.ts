import { lazy } from "react";

export const UsersListPage = lazy(() => import("./UsersListPage"));
export const AccountPage = lazy(() => import("./AccountPage"));

export const LoginPage = lazy(() => import("./LoginPage"));
export const RegisterPage = lazy(() => import("./RegisterPage"));

export { default as ErrorPage } from "./ErrorPage";
