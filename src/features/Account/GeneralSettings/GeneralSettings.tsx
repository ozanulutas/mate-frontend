import { useDispatch } from "react-redux";

import UpdateProfileForm from "./UpdateProfileForm/UpdateProfileForm";
import { useEffect } from "react";
import { getGendersRequest } from "../slice";

function GeneralSettings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGendersRequest());
  }, [dispatch]);

  return <UpdateProfileForm />;
}

export default GeneralSettings;
