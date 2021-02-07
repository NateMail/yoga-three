import React from "react";
import { Parallax } from "react-parallax";
import "./index.css";
import space from "../Images/space.jpg";

const Next = () => {
  return (
    <Parallax
      bgImage={space}
      strength={200}
      renderLayer={(percentage) => (
        <div
          className="ren"
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            background: `rgba(255, 123, 23, ${percentage * 1})`,
            transform: `translate(-50%, -50%) scale(${percentage * 5})`,
          }}
        >
          <h1>Quote</h1>
        </div>
      )}
    >
      <div style={{ height: "100vh" }}></div>
    </Parallax>
  );
};

export default Next;
