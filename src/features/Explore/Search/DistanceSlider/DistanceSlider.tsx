import { useDispatch, useSelector } from "react-redux";
import { SliderUnstyledOwnProps } from "@mui/base";

import { setSearchDistance } from "../../slice";
import { selectSearchDistance } from "../../selectors";

import { Slider } from "@mui/material";

function DistanceSlider() {
  const dispatch = useDispatch();
  const searchDistance = useSelector(selectSearchDistance);

  const handleChange: SliderUnstyledOwnProps["onChangeCommitted"] = (
    event,
    value
  ) => {
    dispatch(setSearchDistance(value as number));
  };

  return (
    <Slider
      onChangeCommitted={handleChange}
      defaultValue={searchDistance}
      valueLabelDisplay="auto"
      step={10}
      marks
      min={10}
      max={800}
    />
  );
}

export default DistanceSlider;
