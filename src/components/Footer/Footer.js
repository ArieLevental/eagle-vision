import React from "react";
import styles from "./Footer.module.css";
import footerImg from "../../assets/footer.png";

const footer = () => {
  return (
    <div className={styles.footer}>
      <img className={styles.footerImage} src={footerImg} />
      <div className={styles.text}>
        Made by Arie Levental
        <a href="https://www.linkedin.com/in/arie-levental/">
          <i className={styles.Margin + " fab fa-linkedin"} />
        </a>
        <a href="https://github.com/AverageLeo">
          <i className="fab fa-github" />
        </a>
        <a href="mailto:arieka39@gmail.com">
          <i className="fas fa-envelope" />
        </a>
        <a href="https://arielevental.com">
          <i className="fas fa-beer"></i>
        </a>
      </div>
    </div>
  );
};

export default footer;
