import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ResearchStore } from "./Context/ResearchContext";
import App from "./Pages/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResearchStore>
        <App />
      </ResearchStore>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
