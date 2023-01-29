import { ControllerRenderProps } from "react-hook-form";

import { Slider } from "@mui/material";

type DistanceSliderProps = {
  field: ControllerRenderProps<any, any>;
};

function DistanceSlider({ field }: DistanceSliderProps) {
  return (
    <Slider
      {...field}
      aria-label="Temperature"
      defaultValue={30}
      // getAriaValueText={valuetext}
      valueLabelDisplay="auto"
      step={10}
      marks
      min={10}
      max={800}
    />
  );
}

export default DistanceSlider;
