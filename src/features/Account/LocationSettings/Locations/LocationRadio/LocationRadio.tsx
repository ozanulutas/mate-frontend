import { RadioProps, Radio } from "@mui/material";
import RadioIcon from "./RadioIcon/RadioIcon";

function LocationRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      checkedIcon={<RadioIcon sx={{ bgcolor: "primary.main" }} />}
      icon={<RadioIcon />}
      sx={{ p: 0 }}
      {...props}
    />
  );
}

export default LocationRadio;
