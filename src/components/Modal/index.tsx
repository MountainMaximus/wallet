import React from "react";

import styles from "./Modal.module.scss";
import { Button } from "../Button";
import classNames from "classnames";

type ModalProps = {
  children: React.ReactNode;
  onClickClose: () => void;
  onClickBtn?: () => void;
  btnText?: string;
};
export const Modal: React.FC<ModalProps> = ({
  onClickClose,
  children,
  btnText,
  onClickBtn,
}) => {
  return (
    <div className={styles.mask}>
      <div className={styles.content}>
        <div className={styles.text}>{children}</div>
        <Button
          textColor="#fff"
          color="#2688eb"
          type="button"
          onClick={onClickBtn ? onClickBtn : onClickClose}
        >
          {btnText ? btnText : "Хорошо"}
        </Button>
      </div>
      <div
        onClick={onClickClose}
        className={classNames(styles.closeBtn, {
          [styles.compact]: window.innerWidth / window.innerHeight > 0.9,
        })}
      >
        &#215;
      </div>
    </div>
  );
};
