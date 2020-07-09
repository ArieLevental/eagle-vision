import React from "react";
import styles from "./FaceRecognition.module.css";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className={styles.imageZone}>
      <div className={styles.imageHolder}>
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        <div
          className={styles.boundingBox}
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
