import { Outlet } from "react-router-dom";

import { GoBackButton } from "src/components";

function GoBackLayout() {
  return (
    <>
      <GoBackButton />
      <Outlet />
    </>
  );
}

export default GoBackLayout;
