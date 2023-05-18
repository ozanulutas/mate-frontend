import ReactDOM from "react-dom/client";

import "./i18n";
import { setYupLocale } from "./utils/set-yup-locale";

import App from "./App";

setYupLocale();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
