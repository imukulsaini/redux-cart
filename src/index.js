import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "./reducers/products";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
