import { lazy } from "react";

export { default as UsersListPage } from "./UsersListPage";

export const LoginPage = lazy(() => import("./LoginPage"));
export const RegisterPage = lazy(() => import("./RegisterPage"));

export { default as ErrorPage } from "./ErrorPage";
