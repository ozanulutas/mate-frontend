import { Drawer } from "src/features/AppDrawer/constants";

import AppDrawer from "src/features/AppDrawer";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "src/components";

function AccountDrawer() {
  return (
    <AppDrawer drawerKey={Drawer.ACCOUNT}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Settings", "Profile", "Account", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link to="/account">
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </AppDrawer>
  );
}

export default AccountDrawer;
