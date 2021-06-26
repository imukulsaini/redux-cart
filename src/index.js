import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer/index";
 
import {createStore} from "redux";
import App from "./App";

const store = createStore(rootReducer)


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store= { store }>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

