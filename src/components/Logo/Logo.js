import React from "react";
import Tilt from "react-tilt";
import logo from "./logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="Logo">
      <Tilt
        className="Tilt"
        options={{ max: 50 }}
        style={{ height: 100, width: 100 }}
      >
        <div className="Tilt-inner pa3">
          <img alt="logo" src={logo} />
        </div>
      </Tilt>
      <h2>Eagle-Vision</h2>
    </div>
  );
};

export default Logo;
