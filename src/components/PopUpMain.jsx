import styles from "./PopUpMain.module.css";

function PopUpMain() {
  const isWin = true;

  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>
        {isWin ? "Congratulations! 😁" : "Time's Up! ⌛ Better luck next time!"}
      </h2>
      <p className={styles.text}>
        {isWin
          ? `Amazing job! You've matched all the pairs in ${10} tries and scored ${3} points! 🎉`
          : `Don't give up! You matched ${10} pairs and scored ${3} points. Try to match them all next time! 💪`}
      </p>
    </main>
  );
}

export default PopUpMain;
