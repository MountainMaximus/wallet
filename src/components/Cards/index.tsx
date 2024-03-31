import React from "react";
import { observer } from "mobx-react-lite";

import styles from "./Cards.module.scss";
import cards from "../../store/cards";

export const Cards: React.FC = observer(() => {
  console.log(cards.cards);
  console.log(cards.status);

  return (
    <div>
      <button onClick={() => cards.fetchCards()}>asd</button>
      {cards.cards.map((obj) => (
        <div key={obj.company.companyId}>
          {obj.mobileAppDashboard.companyName}
        </div>
      ))}
    </div>
  );
});
