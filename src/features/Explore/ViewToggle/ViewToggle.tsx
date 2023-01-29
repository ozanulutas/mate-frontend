import { useDispatch, useSelector } from "react-redux";

import { setView } from "src/features/Explore/slice";
import { selectView } from "src/features/Explore/selectors";
import { View } from "src/features/Explore/constants";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Map as MapIcon, List as ListIcon } from "@mui/icons-material";

function ViewToggle() {
  const dispatch = useDispatch();
  const view = useSelector(selectView);

  const handleChange = (event: React.MouseEvent<HTMLElement>, view: View) => {
    dispatch(setView(view));
  };

  return (
    <ToggleButtonGroup
      value={view}
      onChange={handleChange}
      exclusive
      size="small"
      color="primary"
    >
      <ToggleButton value={View.MAP}>
        <MapIcon />
      </ToggleButton>
      <ToggleButton value={View.LIST}>
        <ListIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ViewToggle;
