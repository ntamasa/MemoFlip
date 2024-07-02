import Button from "./Button";
import styles from "./PopUpActions.module.css";

function PopUpActions({ children, isEnd }) {
  return (
    <div className={`${styles.actions} ${!isEnd ? "single" : ""}`}>
      {children && <h3 className={styles.heading}>{children}</h3>}

      <div className={styles.buttons}>
        <Button moreStyles={styles.btn}>Normal</Button>
        <Button moreStyles={styles.btn}>Hard</Button>
      </div>
    </div>
  );
}

export default PopUpActions;
