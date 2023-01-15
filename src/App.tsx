import AppRouterProvider from "src/router/AppRouterProvider";
import StoreProvider from "src/redux/StoreProvider";

import Toast from "src/features/Toast";

function App() {
  return (
    <StoreProvider>
      <AppRouterProvider />
      <Toast />
    </StoreProvider>
  );
}

export default App;
