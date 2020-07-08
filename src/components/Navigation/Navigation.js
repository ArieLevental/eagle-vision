import React from "react";
import styles from "./Navigation.module.css";
import Logo from "../Logo/Logo";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className={styles.Nav}>
        <Logo />
        <div
          onClick={() => onRouteChange("signout")}
          className="f3 link dim black underline pa3 pointer"
        >
          {" "}
          Sign Out{" "}
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={styles.Nav}>
        <Logo />
        <div className={styles.NavLinks}>
          <div onClick={() => onRouteChange("signin")} className={styles.Link}>
            {" "}
            Login{" "}
          </div>
          <div
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            {" "}
            Register{" "}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navigation;
