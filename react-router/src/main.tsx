import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* StrictMode is a tool for highlighting potential problems in an
    application. Like Fragment, StrictMode does not render any visible UI. It
    activates additional checks and warnings for its descendants. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
