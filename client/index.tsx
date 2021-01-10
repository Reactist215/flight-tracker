import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app/components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/reducers/flightsReducers";
import "../public/styles.scss";

// import { styles } from '../public/styles.scss';
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("app")
);
