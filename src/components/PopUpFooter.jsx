import Button from "./Button";
import styles from "./PopUpFooter.module.css";
function PopUpFooter() {
  function handleClick() {}

  return (
    <footer className={styles.footer}>
      <Button moreStyles={styles.text} type="later" onClick={handleClick}>
        No, I want to play later.
      </Button>
    </footer>
  );
}

export default PopUpFooter;
