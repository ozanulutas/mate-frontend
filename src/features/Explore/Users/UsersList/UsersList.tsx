import { useSelector } from "react-redux";

import {
  selectSelectedCategories,
  selectUsers,
} from "src/features/Explore/selectors";

import {
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { Stack } from "@mui/system";

function UsersList() {
  const users = useSelector(selectUsers);
  const selectedCategories = useSelector(selectSelectedCategories);

  const highlightCategory = (categoryId: number) =>
    selectedCategories.some((id) => categoryId === id);

  return (
    <List>
      {users.map(({ id, categories, username }, i, arr) => (
        <Fragment key={id}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{username[0]}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={username}
              secondary={
                <Stack direction="row" spacing={0.5}>
                  {categories.map((category) => (
                    <Chip
                      label={category.name}
                      color={
                        highlightCategory(category.id) ? "primary" : "default"
                      }
                      size="small"
                    />
                  ))}
                </Stack>
              }
              secondaryTypographyProps={{ component: "div" }}
            />
          </ListItem>
          {i !== arr.length - 1 && <Divider variant="inset" component="li" />}
        </Fragment>
      ))}
    </List>
  );
}

export default UsersList;
