import React from "react";
import styles from "./Preloader.module.scss";

export const Preloader: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.preloader}>
        <svg
          className={styles.svg}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 210 210"
        >
          <circle
            className={styles.circ}
            transform="rotate(15 105 105)"
            cx="105"
            cy="105"
            r="100"
          />
        </svg>
      </div>
      <div className={styles.text}>Подгрузка компаний</div>
    </div>
  );
};
