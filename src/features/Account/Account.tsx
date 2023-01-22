import { lazy } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  ArrowBack as ArrowBackIcon,
  Settings as SettingsIcon,
  Security as SecurityIcon,
  LocationOn as LocationOnIcon,
  Category as CategoryIcon,
} from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const GeneralSettings = lazy(() => import("./GeneralSettings"));
const SecuritySettings = lazy(() => import("./SecuritySettings"));
const LocationSettings = lazy(() => import("./LocationSettings"));
const GeneralSetCategorySettingstings = lazy(
  () => import("./CategorySettings")
);

const Tab = {
  GENERAL_SETTINGS: "general-settings",
  SECURITY_SETTINGS: "security-settings",
  LOCATIONS: "locations",
  CATEGORIES: "categories",
};

const Component = {
  [Tab.GENERAL_SETTINGS]: <GeneralSettings />,
  [Tab.SECURITY_SETTINGS]: <SecuritySettings />,
  [Tab.LOCATIONS]: <LocationSettings />,
  [Tab.CATEGORIES]: <GeneralSetCategorySettingstings />,
};

function Account() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchParam = searchParams.get("tab");

  return (
    <>
      <IconButton aria-label="back" onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>
      {!searchParam && (
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setSearchParams({ tab: Tab.GENERAL_SETTINGS })}
            >
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"General Settings"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setSearchParams({ tab: Tab.SECURITY_SETTINGS })}
            >
              <ListItemIcon>
                <SecurityIcon />
              </ListItemIcon>
              <ListItemText primary={"Security Settings"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setSearchParams({ tab: Tab.LOCATIONS })}
            >
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={"Locations"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => setSearchParams({ tab: Tab.CATEGORIES })}
            >
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={"Categories"} />
            </ListItemButton>
          </ListItem>
        </List>
      )}
      {searchParam && Component[searchParam]}
    </>
  );
}

export default Account;
