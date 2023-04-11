import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import { ListItemAvatar, Avatar, SxProps } from "@mui/material";

type RadioIconProps = {
  sx?: SxProps;
};

function RadioIcon({ sx }: RadioIconProps) {
  return (
    <ListItemAvatar sx={{ mt: 0 }}>
      <Avatar sx={sx}>
        <LocationOnIcon />
      </Avatar>
    </ListItemAvatar>
  );
}

export default RadioIcon;
