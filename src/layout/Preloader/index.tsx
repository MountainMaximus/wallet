import React from "react";
import styles from "./Preloader.module.scss";

const Preloader: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <img src="/preloaderLogo.svg" alt="Logo" />
      </div>
    </div>
  );
};

export default Preloader;
