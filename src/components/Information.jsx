import styles from "./Information.module.css";

function Information() {
  return (
    <header className={styles.informations}>
      <h2 className={styles.time}>Time remaining: 0:00</h2>

      <div className={styles.scores}>
        <p>Tries: 0</p>
        <p>Score: 0</p>
      </div>
    </header>
  );
}

export default Information;
