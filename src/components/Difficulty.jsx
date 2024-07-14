import styles from "./Difficulty.module.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { init } from "../features/game/gameSlice";

function Difficulty() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate("app");
    dispatch(init());
  }

  return (
    <section className={styles.difficulty}>
      <div className={styles.box}>
        <article className={styles.col}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Normal Difficulty: Match Pairs on a 5x6 Board in 4 Minutes
            </h2>
            <p className={styles.text}>
              Challenge your memory with our standard 5x6 board. You have{" "}
              <strong>4 minutes</strong> to match all the pairs. Can you beat
              the clock and show off your memory skills?
            </p>
          </div>

          <Button onClick={handleClick}>Play</Button>
        </article>

        <article className={styles.col}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Hard Difficulty: Master the 5x6 Board in 7.5 Minutes
            </h2>
            <p className={styles.text}>
              Take your memory skills to the next level with our challenging 5x6
              board. You have <strong>7.5 minutes</strong> to find all the
              pairs. Do you have what it takes to conquer this ultimate
              challenge?
            </p>
          </div>

          <Button onClick={handleClick}>Play</Button>
        </article>
      </div>
    </section>
  );
}

export default Difficulty;
