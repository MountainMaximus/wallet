import React from "react";

import styles from "./Loaders.module.scss";
import { SVG } from "./svg";

export const Preloader: React.FC = () => {
  return (
    <>
      <div className={styles.preloader}>
        <SVG />
      </div>
      <div className={styles.text}>Подгрузка компаний</div>
    </>
  );
};
