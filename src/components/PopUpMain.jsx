import styles from "./PopUpMain.module.css";

function PopUpMain() {
  const isWin = false;
  const isEnd = false;

  return (
    <main className={styles.main}>
      <h2 className={styles.heading}>
        {!isEnd ? (
          <>Ready to Test Your Memory?</>
        ) : isWin ? (
          <>Congratulations! 😁</>
        ) : (
          <>
            Time&apos;s Up! ⌛<br />
            Better luck next time!
          </>
        )}
      </h2>
      <p className={styles.text}>
        {!isEnd ? (
          <>Select your preferred diffuculty and start playing!</>
        ) : isWin ? (
          <>
            Amazing job! You&apos;ve matched all the pairs in
            <strong>10</strong> tries and scored <strong>3</strong> points! 🎉
          </>
        ) : (
          <>
            Don&apos;t give up! You matched <strong>10</strong> pairs and scored
            <strong>3</strong> points. Try to match them all next time! 😋
          </>
        )}
      </p>
    </main>
  );
}

export default PopUpMain;
