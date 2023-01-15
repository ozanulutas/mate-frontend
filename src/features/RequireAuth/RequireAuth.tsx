import { Navigate, Outlet } from "react-router-dom";

import { LocalStorageKey } from "src/constants";
import { Path } from "src/router/path";

function RequireAuth() {
  const accessToken = localStorage.getItem(LocalStorageKey.TOKEN);

  if (!accessToken) {
    return <Navigate to={Path.LOGIN} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
