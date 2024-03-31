import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Wrapper.module.scss";
import { Header } from "../../components";
import { Preloader } from "../Preloader";

export const Wrapper: React.FC = () => {
  const [preload, setPreload] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setPreload(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.wrapper}>
      {preload ? (
        <img className={styles.logo} src="/logo.png" alt="Logo" />
      ) : (
        <>
          <Header />
          <div className={styles.container}>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};
