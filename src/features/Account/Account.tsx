import {
  Settings as SettingsIcon,
  Security as SecurityIcon,
  LocationOn as LocationOnIcon,
  Category as CategoryIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "src/components";
import { Path } from "src/router/path";

const navItems = [
  {
    to: Path.GENERAL_SETTINGS,
    text: "General Settings",
    icon: <SettingsIcon />,
  },
  {
    to: Path.SECURITY_SETTINGS,
    text: "Security Settings",
    icon: <SecurityIcon />,
  },
  {
    to: "",
    text: "Search Settings",
    icon: <SearchIcon />,
  },
  {
    to: Path.LOCATIONS,
    text: "Locations",
    icon: <LocationOnIcon />,
  },
  {
    to: Path.CATEGORIES,
    text: "Categories",
    icon: <CategoryIcon />,
  },
];

function Account() {
  return (
    <List>
      {navItems.map(({ to, text, icon }) => (
        <ListItem disablePadding>
          <ListItemButton component={Link} to={to}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Account;
