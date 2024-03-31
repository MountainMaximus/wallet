import React from "react";

import styles from "./Header.module.scss";
export const Header: React.FC = () => {
  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Управление картами</h1>
    </header>
  );
};
