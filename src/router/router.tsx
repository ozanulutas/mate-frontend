import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "src/features/RequireAuth";

import { Path } from "./path";

import AppLayout from "src/layouts/AppLayout";
import AuthLayout from "src/layouts/AuthLayout";
import { ErrorPage, LoginPage, RegisterPage, UsersListPage } from "src/pages";

// @TODO: Layout routerları birleştirilip tek bir errorElement kullanılabilir?
// export const router = createBrowserRouter([
//   {
//     path: Path.HOME,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         element: <AppLayout />,
//         children: [
//           {
//             element: <RequireAuth />,
//             children: [
//               {
//                 path: Path.USERS,
//                 element: <UsersListPage />,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         element: <AuthLayout />,
//         children: [
//           {
//             path: Path.LOGIN,
//             element: <LoginPage />,
//           },
//           {
//             path: Path.REGISTER,
//             element: <RegisterPage />,
//           },
//         ],
//       },
//     ],
//   },
export const router = createBrowserRouter([
  {
    path: Path.HOME,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            path: Path.USERS,
            element: <UsersListPage />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: Path.LOGIN,
        element: <LoginPage />,
      },
      {
        path: Path.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
]);
