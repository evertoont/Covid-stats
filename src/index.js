import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UseProvider } from "./context/InputContext";

ReactDOM.render(
  <React.StrictMode>
    <UseProvider>
      <App />
    </UseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
