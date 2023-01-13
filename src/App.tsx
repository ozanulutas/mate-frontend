import AppRouterProvider from "src/router/AppRouterProvider";
import StoreProvider from "src/redux/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <AppRouterProvider />
    </StoreProvider>
  );
}

export default App;
