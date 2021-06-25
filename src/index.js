import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { productStore } from "./reducers/products";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store= { productStore}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
