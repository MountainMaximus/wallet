import React from "react";

import styles from "./Modal.module.scss";
import { Button } from "../Button";

type ModalProps = {
  children: React.ReactNode;
  onClickClose: () => void;
};
export const Modal: React.FC<ModalProps> = ({ onClickClose, children }) => {
  return (
    <div className={styles.mask}>
      <div
        onClick={(event) => event.stopPropagation()}
        className={styles.content}
      >
        <div className={styles.text}>{children}</div>
        <Button
          textColor="#fff"
          color="#2688eb"
          type="button"
          onClick={onClickClose}
        >
          Хорошо
        </Button>
      </div>
      <div onClick={onClickClose} className={styles.closeBtn}>
        &#215;
      </div>
    </div>
  );
};
