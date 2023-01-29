import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { View } from "./constants";

import { Map as MapIcon, List as ListIcon } from "@mui/icons-material";
import { useState } from "react";

function ViewToggle() {
  const [view, setView] = useState(View.MAP);

  const handleChange = (event: React.MouseEvent<HTMLElement>, view: View) => {
    setView(view);
    console.log(view);
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
