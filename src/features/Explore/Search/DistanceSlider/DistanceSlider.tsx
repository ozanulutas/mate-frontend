import { useDispatch, useSelector } from "react-redux";
import { SliderUnstyledOwnProps } from "@mui/base";

import { setSearchDistance } from "../../slice";
import { selectSearchDistance } from "../../selectors";

import { Slider } from "@mui/material";

const marks = [
  {
    value: 10,
    label: "10 km",
  },
  {
    value: 800,
    label: "800 km",
  },
];

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
      getAriaValueText={(val) => `${val} km`}
      valueLabelFormat={(val) => `${val} km`}
      valueLabelDisplay="on"
      step={10}
      marks={marks}
      min={10}
      max={800}
    />
  );
}

export default DistanceSlider;
