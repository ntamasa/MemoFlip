import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        The Ultimate Memory
        <br />
        Challenge
      </h1>
      <p className={styles.headingText}>
        Sharpen your mind and have fun with MemoFlip. Choose your difficulty,
        test your memory, and see how many points you can score!
      </p>
    </header>
  );
}

export default Header;
