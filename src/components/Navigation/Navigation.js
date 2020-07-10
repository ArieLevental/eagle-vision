import React from "react";
import styles from "./Navigation.module.css";
import Logo from "../Logo/Logo";
import moon from "../../assets/moon.png";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className={styles.Nav}>
        <Logo />
        <div onClick={() => onRouteChange("signout")} className={styles.Link}>
          {" "}
          Sign Out{" "}
        </div>
        <img className={styles.moon} src={moon} alt="moon" />
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
            className={styles.Link}
          >
            {" "}
            Register{" "}
          </div>
        </div>
        <img className={styles.moon} src={moon} alt="moon" />
      </nav>
    );
  }
};

export default Navigation;
