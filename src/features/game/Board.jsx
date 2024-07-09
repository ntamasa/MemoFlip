import styles from "./Board.module.css";
import Card from "./Card";

import { useDispatch, useSelector } from "react-redux";
import { clickCard, disable, start, unflip } from "./gameSlice.jsx";

import { useEffect } from "react";

function Board() {
  const dispatch = useDispatch();
  const { content, flippedCards, unFlipping, correctPairs, isDisabled } =
    useSelector((store) => store.game);

  useEffect(() => {
    dispatch(start());
  }, [dispatch]);

  useEffect(() => {
    if (flippedCards.length !== 2) return;

    dispatch(disable());

    // wait 1.5s before another action
    const timer = setTimeout(() => {
      dispatch(unflip());
    }, 1500);

    return () => clearTimeout(timer);
  }, [dispatch, flippedCards]);

  // card click handler
  const handleClick = (index) => {
    if (
      !isDisabled ||
      flippedCards.some((card) => card.index !== index) ||
      correctPairs.some((card) => card.index !== index)
    )
      dispatch(clickCard(index));
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
