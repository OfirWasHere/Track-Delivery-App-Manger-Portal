import React from "react";
import { Outlet, useOutlet } from "react-router-dom";
import "./Root.css";
import Home from "../Home/Home";
function Root() {
  const outlet = useOutlet();
  return (
    <div className="site-wrapper">
      <div className="main-area-wrapper">
        <div>{outlet ? <Outlet /> : <Home />}</div>
      </div>
    </div>
  );
}

export default Root;
