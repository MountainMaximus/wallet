import React from "react";
import { observer } from "mobx-react-lite";
import { useInView } from "react-intersection-observer";

import cards, { Status } from "../../store/cards";
import { Card } from "./Card";

export const Cards: React.FC = observer(() => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  React.useEffect(() => {
    if (inView) cards.fetchCards();
  }, [inView, ref]);
  if (cards.cards.length === 0 && cards.status.condition !== Status.loading)
    return <div style={{ marginTop: "4vw" }}>Нет копаний</div>;
  return (
    <div>
      {cards.cards.map((obj, i, arr) => {
        if (i === arr.length - 1)
          return (
            <div key={obj.company.companyId} ref={ref}>
              <Card {...obj} />
            </div>
          );
        else return <Card key={obj.company.companyId} {...obj} />;
      })}
    </div>
  );
});
