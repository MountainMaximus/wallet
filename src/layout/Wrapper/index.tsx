import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Wrapper.module.scss";
import { Header } from "../../components";

export const Wrapper: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
};
