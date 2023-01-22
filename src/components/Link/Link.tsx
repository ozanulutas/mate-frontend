import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import { forwardRef } from "react";

type LinkProps = MuiLinkProps & RouterLinkProps;

const RouterLinkRef = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink ref={ref} {...props} />
);

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return <MuiLink {...props} ref={ref} component={RouterLinkRef} />;
});

export default Link;
