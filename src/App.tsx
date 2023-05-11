import AppRouterProvider from "src/router/AppRouterProvider";
import StoreProvider from "src/redux/StoreProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

import { CssBaseline } from "@mui/material";
import Toast from "src/components/Toast";

function App() {
  return (
    <StoreProvider>
      <CssBaseline />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppRouterProvider />
      </LocalizationProvider>

      <Toast />
    </StoreProvider>
  );
}

export default App;
