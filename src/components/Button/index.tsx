import React from "react";

import styles from "./Button.module.scss";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  color?: `#${string}`;
  textColor?: `#${string}`;
}
export const Button: React.FC<IButton> = ({
  children,
  onClick,
  type,
  color,
  textColor,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.root}
      style={{ color: textColor, backgroundColor: color }}
    >
      {children}
    </button>
  );
};
