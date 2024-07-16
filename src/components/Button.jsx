import styles from "./Button.module.css";

function Button({ onClick, children, moreStyles = null, type = null }) {
  if (type === "close" || type === "hamburger")
    return (
      <button
        className={type === "close" ? styles.close : styles.hamburger}
        onClick={onClick}
      >
        <span>&nbsp;</span>
      </button>
    );

  if (type === "later")
    return (
      <button className={styles.later} onClick={onClick}>
        No, I want to play later.
      </button>
    );

  return (
    <button className={`${styles.btn} ${moreStyles}`} onClick={onClick}>
      <p className={styles.btnText}>{children}</p>
      <svg
        className={styles.btnIcon}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </button>
  );
}

export default Button;
