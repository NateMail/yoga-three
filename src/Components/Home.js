import React from "react";
import { Parallax } from "react-parallax";
import yogamat from "../Images/yogamat.jpg";
import "./index.css";

const Home = () => {
  return (
    <Parallax bgImage={yogamat} strength={500}>
      <div style={{ height: "100vh" }}>
        <h1 className="home-text">Yoga</h1>
      </div>
    </Parallax>
  );
};

export default Home;
