import React from "react";
import { Provider } from "react-redux";
import store from "./config/store";
import { AlertProvider } from './components/Alert';
import Home from "./screens/Home";

export default () => (
  <Provider store={store}>
    <AlertProvider>
      <Home />
    </AlertProvider>
  </Provider>
);
