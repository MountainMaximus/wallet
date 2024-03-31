import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Wrapper.module.scss";
import { Header } from "../../components";
import { Refresh } from "../Loaders/Resresh";

export const Wrapper: React.FC = () => {
  const [preload, setPreload] = React.useState(true);
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setPreload(false);
    }, 3000);
  }, []);
  React.useEffect(() => {
    const refreshListener = () => {
      setRefresh(true);
    };
    window.addEventListener("beforeunload", refreshListener);
    return () => {
      setRefresh(false);
      window.removeEventListener("beforeunload", refreshListener);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {preload ? (
        <img className={styles.logo} src="/logo.png" alt="Logo" />
      ) : (
        <>
          <Header />
          <div className={styles.container}>
            {refresh && <Refresh />}
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};
