import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./view/pages/MainPage";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <MainPage />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
