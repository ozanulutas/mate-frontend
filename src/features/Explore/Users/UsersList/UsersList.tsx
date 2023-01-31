import { useSelector } from "react-redux";

import {
  selectSelectedCategories,
  selectUsers,
} from "src/features/Explore/selectors";

import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { Link } from "src/components";
import { Path } from "src/router/path";
import { replacePathParams } from "src/utils/replace-path-params";
import CategoryChips from "src/components/CategoryChips";

function UsersList() {
  const users = useSelector(selectUsers);
  const selectedCategories = useSelector(selectSelectedCategories);

  return (
    <List>
      {users.map(({ id, categories, username }, i, arr) => (
        <Fragment key={id}>
          <ListItem alignItems="flex-start" disablePadding>
            <ListItemButton
              to={replacePathParams(Path.PROFILE, { userId: id })}
              component={Link}
              sx={{ py: 2, pr: 4 }}
            >
              <ListItemAvatar>
                <Avatar>{username[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={username}
                secondary={
                  <CategoryChips
                    categories={categories}
                    matchingCategories={selectedCategories}
                  />
                }
                secondaryTypographyProps={{ component: "div" }}
              />
            </ListItemButton>
          </ListItem>
          {i !== arr.length - 1 && <Divider variant="inset" component="li" />}
        </Fragment>
      ))}
    </List>
  );
}

export default UsersList;
