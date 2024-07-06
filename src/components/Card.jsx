import styles from "./Card.module.css";

import { useState } from "react";

function Card({ children, id }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isUnflipping, setIsUnflipping] = useState(false);

  const handleCardClick = (e) => {
    e.stopPropagation();

    if (isFlipped) {
      setIsUnflipping(true);

      setTimeout(() => {
        setIsFlipped(false);
        setIsUnflipping(false);
      }, 500);
    } else {
      setIsFlipped(true);
    }
  };

  return (
    <div className={styles.cardScene}>
      <div
        className={`${styles.card} ${isFlipped ? "cardUnflipped" : ""} ${
          isUnflipping ? "cardUnflip" : ""
        }`}
        onClick={handleCardClick}
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
}

export default Card;
