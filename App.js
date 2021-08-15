import React from "react";
import Navigation from "./navigation/navigation";

import { Provider } from "react-redux";

import Store from "./State/store";

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}
