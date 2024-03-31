import React from "react";

import styles from "./Loaders.module.scss";

export const SVG: React.FC<{ weight?: boolean }> = ({ weight }) => {
  return (
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
        r={weight ? 60 : 95}
        strokeWidth={weight ? 15 : 10}
        stroke={weight ? "#2688eb" : "#1a1a1a"}
      />
    </svg>
  );
};
