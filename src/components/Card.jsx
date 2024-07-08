import styles from "./Card.module.css";

function Card({ children, onClick, isFlipped, isUnflipping }) {
  return (
    <div className={styles.cardScene}>
      <div
        className={`${styles.card} ${isFlipped ? "cardUnflipped" : ""} ${
          isUnflipping ? "cardUnflip" : ""
        }`}
        onClick={onClick}
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
