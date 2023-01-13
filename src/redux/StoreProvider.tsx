import { Provider } from "react-redux";
import store from "./store";

type StoreProviderProps = {
  children: React.ReactNode;
};

function StoreProvider({ children }: StoreProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
