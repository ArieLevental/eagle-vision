import React from "react";
import styles from "./imageLinkForm.module.css";
import Ola from "ola";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className={styles.ImageLinkForm}>
      <div className={styles.GuideText}>
        <div
          style={{ maxWidth: "670px", marginRight: "auto", marginLeft: "auto" }}
        >
          {
            "This Eagle can detect faces in your pictures. Just paste an image URL and press detect for the magic!"
          }
        </div>
      </div>
      <div className="center">
        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            onChange={onInputChange}
            placeholder="Enter Image URL"
          />
          {/*<button className={styles.button} onClick={onButtonSubmit}>
            Detect
        </button>*/}
          <button
            className={styles.btn + " " + styles.drawBorder}
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
