import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import "./i18n/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
