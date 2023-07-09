import React, { useEffect, useState } from "react";
import CardItem from "./ui/CardItem";
import cardsData from "api/cards";
function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-x-4">
        {cards.length && cards.map((card, key) => (
          <CardItem key={key} card={card} />
        ))}
      </div>
    </>
  );
}

export default Cards;
