import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "src/features/RequireAuth";

import AppLayout from "src/layouts/AppLayout";
import AuthLayout from "src/layouts/AuthLayout";
import { ErrorPage, LoginPage, UsersListPage } from "src/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            path: "users",
            element: <UsersListPage />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);
