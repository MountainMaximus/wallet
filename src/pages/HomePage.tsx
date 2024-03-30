import React from "react";

export const HomePage: React.FC = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return <div></div>;
};
