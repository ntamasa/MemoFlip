import styles from "./PopUpHeader.module.css";

import Logo from "./Logo";
import Button from "./Button";

function PopUpHeader() {
  function handleClick() {}

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <p>MemoFlip</p>
        <Logo />
      </div>

      <Button type="close" onClick={handleClick} />
    </header>
  );
}

export default PopUpHeader;
