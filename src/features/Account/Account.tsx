import { useDispatch } from "react-redux";
import { Drawer } from "../AppDrawer/constants";
import { toggleDrawer } from "../AppDrawer/slice";

function Account() {
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(toggleDrawer(Drawer.ACCOUNT))}>
        Settings
      </button>
      <br /> Profile
      <br /> Account
      <br /> Logout
    </>
  );
}

export default Account;
