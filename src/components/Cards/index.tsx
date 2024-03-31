import React from "react";
import { observer } from "mobx-react-lite";
import styles from "./Cards.module.scss";
import cards from "../../store/cards";
import { Card } from "./Card";

export const Cards: React.FC = observer(() => {
  console.log(cards.cards);

  return (
    <div>
      {cards.cards.map((obj) => (
        <Card key={obj.company.companyId} {...obj} />
      ))}
    </div>
  );
});
