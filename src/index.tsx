import React from "react";
import ReactDOM from "react-dom/client";
import SearchBox from "./components/SearchBox";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchBox />
  </React.StrictMode>
);
