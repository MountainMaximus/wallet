import React from "react";

import styles from "./Cards.module.scss";
import { CompanyCard } from "../../store/cards";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { Modal } from "../Modal";

export const Card: React.FC<CompanyCard> = (card) => {
  const [modal, setModal] = React.useState<null | string>(null);
  const searchEndings = (sum: number) => {
    const mark = sum % 100;
    if (mark === 1 || (mark > 20 && mark % 10 === 1)) return "бал";
    if (mark in [2, 3, 4] || (mark > 20 && mark % 10 in [2, 3, 4]))
      return "балла";
    return "баллов";
  };
  const {
    cardBackgroundColor,
    highlightTextColor,
    textColor,
    mainColor,
    accentColor,
    backgroundColor,
  } = card.mobileAppDashboard;
  return (
    <>
      <div
        className={styles.card}
        style={{
          color: highlightTextColor,
          backgroundColor: cardBackgroundColor,
        }}
      >
        <div className={styles.header} style={{ borderColor: textColor }}>
          <h4 className={styles.name}>{card.mobileAppDashboard.companyName}</h4>
          <img
            className={styles.logo}
            src={card.mobileAppDashboard.logo}
            alt="Logo"
          />
        </div>
        <div className={styles.balance}>
          {card.customerMarkParameters.mark}
          <span style={{ color: textColor }}>
            {searchEndings(card.customerMarkParameters.mark)}
          </span>
        </div>
        <div className={styles.bonuses} style={{ borderColor: textColor }}>
          <div className={styles.bonus}>
            <div className={styles.title} style={{ color: textColor }}>
              Кешбэк
            </div>
            <div className={styles.value}>
              {card.customerMarkParameters.loyaltyLevel.cashToMark + " %"}
            </div>
          </div>
          <div className={styles.bonus}>
            <div className={styles.title} style={{ color: textColor }}>
              Уровень
            </div>
            <div className={styles.value}>
              {card.customerMarkParameters.loyaltyLevel.name}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Icon
            type="eye"
            color={mainColor}
            onClick={() => setModal("Показать")}
          />
          <Icon
            type="trash"
            color={accentColor}
            onClick={() => setModal("Удалить")}
          />
          <Button
            color={backgroundColor}
            textColor={mainColor}
            onClick={() => setModal("Подробнее")}
          >
            Подробнее
          </Button>
        </div>
      </div>
      {modal && (
        <Modal onClickClose={() => setModal(null)}>
          {"Нажата кнопка: " +
            card.company.companyId +
            ", ID компании: " +
            modal}
        </Modal>
      )}
    </>
  );
};
