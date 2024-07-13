import styles from "./Information.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { tick } from "../features/game/gameSlice";

function Information() {
  const { time, points, tries } = useSelector((store) => store.game);
  const dispatch = useDispatch();

  const mins = Math.floor(time / 60);
  const secs = time % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <header className={styles.informations}>
      <h2 className={styles.time}>
        Time remaining: {mins}:{secs / 10 < 1 ? `0${secs}` : secs}
      </h2>

      <div className={styles.scores}>
        <p>Tries: {tries}</p>
        <p>Score: {points}</p>
      </div>
    </header>
  );
}

export default Information;
