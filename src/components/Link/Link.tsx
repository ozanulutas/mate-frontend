import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type LinkProps = {} & MuiLinkProps & RouterLinkProps;

function Link({ to, children, ...props }: LinkProps) {
  return (
    <MuiLink component={RouterLink} to={to} {...props}>
      {children}
    </MuiLink>
  );
}

export default Link;
