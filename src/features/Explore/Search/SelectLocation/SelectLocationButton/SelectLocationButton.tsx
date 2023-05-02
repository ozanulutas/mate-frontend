import { useDispatch, useSelector } from "react-redux";

import { toggleModal } from "src/components/Modal/slice";
import { ModalKey } from "src/components/Modal/constants";
import { getLocationsRequest } from "src/features/Account/slice";
import { selectSelectedLocation } from "src/features/Account/selectors";

import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import { Button } from "@mui/material";

const SelectLocationButton = () => {
  const dispatch = useDispatch();
  const selectedLocation = useSelector(selectSelectedLocation);

  const handleClick = () => {
    dispatch(getLocationsRequest());
    dispatch(toggleModal(ModalKey.SELECT_LOCATION));
  };

  return (
    <Button
      variant="text"
      startIcon={<LocationOnIcon />}
      sx={{ color: "white" }}
      onClick={handleClick}
    >
      {selectedLocation?.name}
    </Button>
  );
};

export default SelectLocationButton;
