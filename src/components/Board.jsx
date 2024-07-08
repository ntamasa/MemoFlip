import styles from "./Board.module.css";
import Card from "./Card";
import { data } from "../assets/cardData.js";
import { useEffect, useState } from "react";

function shuffleCards(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function Board() {
  const [content, setContent] = useState(data);
  const [flippedCards, setFlippedCards] = useState([]);
  const [unFlipping, setUnflipping] = useState([]);
  const [correctPairs, setCorrectPairs] = useState([]);
  const [disableFlip, setDisableFlip] = useState(false);

  // shuffle cards, on mount
  useEffect(() => {
    setContent(shuffleCards([...data]));
  }, []);

  useEffect(() => {
    // guard clause for not 2 flipped cards
    if (flippedCards.length !== 2) return;

    // initially disable flipping another
    setDisableFlip(true);

    const [firstCard, secondCard] = flippedCards;

    // wait 1.5s before another action
    const timer = setTimeout(() => {
      // 2 flipped does not match
      if (firstCard.id !== secondCard.id) setUnflipping(flippedCards);
      // 2 flipped does match
      else setCorrectPairs([...correctPairs, ...flippedCards]);

      setFlippedCards([]);
      setDisableFlip(false);
    }, 1500);

    setUnflipping([]);

    return () => clearTimeout(timer);
  }, [flippedCards, correctPairs]);

  // card click handler
  const handleClick = (index) => {
    // if an already flipped or just disabled action DO NOTHING
    if (
      disableFlip ||
      flippedCards.some((card) => card.index === index) ||
      correctPairs.some((card) => card.index === index)
    )
      return;

    setFlippedCards([...flippedCards, { index, id: content[index].id }]);
  };

  return (
    <main className={styles.board}>
      {content.slice(0, 30).map((item, i) => (
        <Card
          key={i}
          id={item.id}
          isFlipped={
            flippedCards.some((card) => card.index === i) ||
            correctPairs.some((card) => card.index === i)
          }
          isUnflipping={unFlipping.some((card) => card.index === i)}
          onClick={() => handleClick(i)}
        >
          {item.emoji}
        </Card>
      ))}
    </main>
  );
}

export default Board;
