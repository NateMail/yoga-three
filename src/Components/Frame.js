import React from "react";
import Home from "./Home";
import Next from "./Next";
import "./index.css";

const Frame = () => {
  return (
    <div className="frame">
      <Home />
      <div style={{ height: "100vh" }}></div>
      <Next />
      <div style={{ height: "100vh" }}></div>
    </div>
  );
};

export default Frame;
