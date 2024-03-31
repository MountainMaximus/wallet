import React from "react";
import { Cards } from "../components";
import cards from "../store/cards";
export const HomePage: React.FC = () => {
  React.useEffect(() => {
    cards.fetchCards();
  }, []);
  return (
    <div>
      <Cards />
    </div>
  );
};
