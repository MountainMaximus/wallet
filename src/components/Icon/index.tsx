import React from "react";

import styles from "./Icon.module.scss";
import { Eye } from "./Eye";
import { Trash } from "./Trash";

interface IIcon {
  onClick?: () => void;
  color?: `#${string}`;
  type: "eye" | "trash";
}
export const Icon: React.FC<IIcon> = ({ onClick, color, type }) => {
  return (
    <div className={styles.root} onClick={onClick}>
      {type === "eye" ? <Eye color={color} /> : <Trash color={color} />}
    </div>
  );
};
