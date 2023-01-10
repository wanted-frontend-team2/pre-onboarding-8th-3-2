import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./pages/Search";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Search />
  </React.StrictMode>
);
