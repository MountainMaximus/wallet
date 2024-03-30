import React from "react";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

const nav = [
  {
    title: "Начало",
    path: "/",
  },
  {
    title: "Игра",
    path: "/game",
  },
  {
    title: "Правила",
    path: "/rules",
  },
  {
    title: "О проекте",
    path: "/about",
  },
];
export const Header: React.FC = () => {
  const pathname = useLocation().pathname;

  return (
    <header
      className={classNames(styles.root, {
        [styles.compact]: pathname === "/game",
      })}
    >
      <div className={styles.container}>
        <Link className={styles.logo} to={"/"}>
          Крутагидон
        </Link>
        <nav className={styles.nav}>
          {nav.map((obj, i) => (
            <Link
              className={classNames(styles.link, {
                [styles.active]: pathname === obj.path,
              })}
              to={obj.path}
              key={i}
            >
              {obj.title}
            </Link>
          ))}
          <div className={styles.auth}>
            <>
              <div className={styles.registerBtn}>user.username</div>
            </>
          </div>
        </nav>
      </div>
    </header>
  );
};
