import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <h1>=== AppBar ===</h1>
      <Outlet />
    </>
  );
}

export default AppLayout;
