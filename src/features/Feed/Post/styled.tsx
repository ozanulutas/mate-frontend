import { styled } from "@mui/material/styles";
import { IconButtonProps, IconButton } from "@mui/material";

type ExpandMoreProps = {
  expand: boolean;
} & IconButtonProps;

export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
