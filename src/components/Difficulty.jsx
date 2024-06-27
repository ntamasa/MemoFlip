import styles from "./Difficulty.module.css";
import Button from "./Button";

function Difficulty() {
  return (
    <section className={styles.difficulty}>
      <div className={styles.box}>
        <article className={styles.col}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Normal Difficulty: Match Pairs on a 5x5 Board in 4 Minutes
            </h2>
            <p className={styles.text}>
              Challenge your memory with our standard 5x5 board. You have 4
              minutes to match all the pairs. Can you beat the clock and show
              off your memory skills?
            </p>
          </div>

          <Button>Play</Button>
        </article>

        <article className={styles.col}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Hard Difficulty: Master the 10x10 Board in 7.5 Minutes
            </h2>
            <p className={styles.text}>
              Take your memory skills to the next level with our challenging
              10x10 board. You have 7.5 minutes to find all the pairs. Do you
              have what it takes to conquer this ultimate challenge?
            </p>
          </div>

          <Button>Play</Button>
        </article>
      </div>
    </section>
  );
}

export default Difficulty;
