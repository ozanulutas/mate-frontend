import { lazy } from "react";

export const LoginPage = lazy(() => import("./LoginPage"));
export const RegisterPage = lazy(() => import("./RegisterPage"));

export const FeedPage = lazy(() => import("./FeedPage"));
export const ExplorePage = lazy(() => import("./ExplorePage"));
export const ProfilePage = lazy(() => import("./ProfilePage"));
export const ChatPage = lazy(() => import("./ChatPage"));
export const ChatsPage = lazy(() => import("./ChatsPage"));
export const NotificationsPage = lazy(() => import("./NotificationsPage"));
export const FriendshipRequestsPage = lazy(
  () => import("./FriendshipRequestsPage")
);

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

export { default as ErrorPage } from "./ErrorPage";
