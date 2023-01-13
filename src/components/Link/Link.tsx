import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type LinkProps = MuiLinkProps & RouterLinkProps;

function Link({ ...props }: LinkProps) {
  return <MuiLink {...props} component={RouterLink} />;
}

export default Link;
