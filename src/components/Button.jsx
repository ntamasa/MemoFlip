import styles from "./Button.module.css";

function Button({ onClick }) {
  return (
    <button className={styles.btn} onClick={onClick}>
      <p className={styles.btnText}>Play</p>
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
