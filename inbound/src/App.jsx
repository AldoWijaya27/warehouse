import React, { lazy, useState } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./scripts/view/components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InboundPage from "./scripts/view/pages/InboundPage";
import OutboundPage from "./scripts/view/pages/OutboundPage";
import FormProductPage from "./scripts/view/pages/FormProductsPage";
import MainPage from "measurements/MainPage";
import "./index.scss";

export default function App() {
  const [authUser, setAuthUser] = useState(1);

  const onLogout = (e) => {
    e.preventDefault();
    setAuthUser(null);
  };

  if (authUser === null) {
    return (
      <BrowserRouter>
        <div className="w-full min-h-screen">
          <main className="login-main w-2/3 mx-auto py-6 px-8">
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="w-full min-h-screen">
        <Sidebar onLogoutHandler={onLogout} />
        <main className="ml-72 py-6 px-8">
          <Routes>
            <Route path="/inbound" element={<InboundPage />} />
            <Route path="/inbound/new" element={<FormProductPage />} />
            <Route path="/outbound" element={<OutboundPage />} />
            <Route path="/measurements" element={<MainPage />} />
            {/* <Route path="/locations" element={<Locations />} /> */}
            {/* <Route path="/measurements" element={<Measurements />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
