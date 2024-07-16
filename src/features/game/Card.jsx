import styles from "../../assets/css/Card.module.css";

import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

import { clickCard } from "./gameSlice";

const Card = memo(function Card({ children, index }) {
  const dispatch = useDispatch();
  const { flippedCards, unFlipping, correctPairs, isDisabled } = useSelector(
    (store) => store.game
  );

  const isFlipped =
    flippedCards.some((card) => card.index === index) ||
    correctPairs.some((card) => card.index === index);
  const isUnflipping = unFlipping.some((card) => card.index === index);

  // click handler
  const handleClick = () => {
    if (
      !isDisabled ||
      flippedCards.some((card) => card.index !== index) ||
      correctPairs.some((card) => card.index !== index)
    )
      dispatch(clickCard(index));
  };

  return (
    <div className={styles.cardScene} onClick={handleClick}>
      <div
        className={`${styles.card} ${isFlipped ? "cardUnflipped" : ""} ${
          isUnflipping ? "cardUnflip" : ""
        }`}
      >
        <div className={`${styles.cardFace} ${styles.cardBack}`}>
          <div className={styles.backMain}>&nbsp;</div>
        </div>

        <div className={`${styles.cardFace} ${styles.cardFront}`}>
          <div className={styles.mainPane}>
            <span>{children}</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
