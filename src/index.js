import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import StartPage from "./pages/StartPage.jsx";
import IndexPage from "./pages/IndexPage.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrap">
    <IndexPage></IndexPage>
  </div>,
);
