import React from "react";
import styles from "./imageLinkForm.module.css";

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
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            placeholder="Enter Image URL"
          />
          <button
            className={styles.button + " w-30 grow f4 link ph3 pv2 white"}
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
