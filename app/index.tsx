import React from "react";
import { Provider } from "react-redux";
import store from "./config/store";
import Home from "./screens/Home";

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
