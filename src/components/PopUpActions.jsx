import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import styles from "./PopUpActions.module.css";
import { start } from "../features/game/gameSlice";

function PopUpActions({ children }) {
  const { status } = useSelector((store) => store.game);
  const dispatch = useDispatch();

  function handleClick(diff = "normal") {
    if (diff === "normal") dispatch(start("normal"));
    else dispatch(start("hard"));
  }

  return (
    <div
      className={`${styles.actions} ${status !== "finished" ? "single" : ""}`}
    >
      {children && <h3 className={styles.heading}>{children}</h3>}

      <div className={styles.buttons}>
        <Button moreStyles={styles.btn} onClick={() => handleClick()}>
          Normal
        </Button>
        <Button moreStyles={styles.btn} onClick={() => handleClick("hard")}>
          Hard
        </Button>
      </div>
    </div>
  );
}

export default PopUpActions;
