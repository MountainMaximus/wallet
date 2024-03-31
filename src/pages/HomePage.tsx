import React from "react";
import { observer } from "mobx-react-lite";

import { Cards } from "../components";
import { Preloader } from "../layout/Loaders/Preloader";
import cards, { Status } from "../store/cards";
import { Modal } from "../components/Modal";

export const HomePage: React.FC = observer(() => {
  React.useEffect(() => {
    cards.fetchCards();
  }, []);
  return (
    <div>
      <Cards />
      {cards.status.condition === Status.loading && <Preloader />}
      {cards.status.condition === Status.error && (
        <Modal
          onClickClose={() => {
            cards.skipError();
          }}
          onClickBtn={() => cards.fetchCards()}
          btnText="Загрузить еще"
        >
          <img
            style={{ width: "8vw" }}
            src="/exclamation.png"
            alt="exclamation"
          />
          <div>{cards.status.message}</div>
        </Modal>
      )}
    </div>
  );
});
