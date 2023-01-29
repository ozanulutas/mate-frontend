import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "src/features/RequireAuth";

import { Path } from "./path";

import AppLayout from "src/layouts/AppLayout";
import AuthLayout from "src/layouts/AuthLayout";
import {
  AccountPage,
  CategorySettingsPage,
  ErrorPage,
  GeneralSettingsPage,
  LocationSettingsPage,
  LoginPage,
  RegisterPage,
  SecuritySettingsPage,
  ExplorePage,
} from "src/pages";
import GoBackLayout from "src/layouts/GoBackLayout";

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
    // errorElement: <ErrorPage />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          {
            element: <GoBackLayout />,
            children: [
              {
                path: Path.ACCOUNT,
                element: <AccountPage />,
              },
              {
                path: Path.GENERAL_SETTINGS,
                element: <GeneralSettingsPage />,
              },
              {
                path: Path.SECURITY_SETTINGS,
                element: <SecuritySettingsPage />,
              },
              {
                path: Path.LOCATIONS,
                element: <LocationSettingsPage />,
              },
              {
                path: Path.CATEGORIES,
                element: <CategorySettingsPage />,
              },
            ],
          },
          {
            path: Path.EXPLORE,
            element: <ExplorePage />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    // errorElement: <ErrorPage />,
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
