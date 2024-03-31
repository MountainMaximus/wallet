import React from "react";

import styles from "./Loaders.module.scss";
import { SVG } from "./svg";

export const Refresh: React.FC = () => {
  return (
    <div className={styles.refresh}>
      <div className={styles.swgWrapper}>
        <SVG weight={true} />
      </div>
    </div>
  );
};
