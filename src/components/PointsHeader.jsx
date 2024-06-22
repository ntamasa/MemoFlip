import styles from "./PointsHeader.module.css";

function PointsHeader() {
  return (
    <header className={styles.header}>
      <hgroup className={styles.hGroup}>
        <p className={styles.subheading}>How Scoring Works</p>
        <h2 className={styles.heading}>
          Earn Points Based on Your Performance
        </h2>
      </hgroup>
      <p className={styles.text}>
        The MemoFlip points system rewards you for quick and efficient matching.
        The fewer tries it takes to find a pair, the more points you earn. This
        system not only makes the game more engaging but also encourages you to
        improve your memory and strategy.
      </p>
    </header>
  );
}

export default PointsHeader;
