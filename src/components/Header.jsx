import styles from "../assets/css/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>The Ultimate Memory Challenge</h1>
      <p className={styles.headingText}>
        Sharpen your mind and have fun with <strong>MemoFlip</strong>. Choose
        your difficulty, <u>test your memory</u>, and see how many points you
        can score!
      </p>
    </header>
  );
}

export default Header;
