import AppRouterProvider from "src/router/AppRouterProvider";
import StoreProvider from "src/redux/StoreProvider";

import { CssBaseline } from "@mui/material";
import Toast from "src/components/Toast";

function App() {
  return (
    <StoreProvider>
      <CssBaseline />

      <AppRouterProvider />
      <Toast />
    </StoreProvider>
  );
}

export default App;
