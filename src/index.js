import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
