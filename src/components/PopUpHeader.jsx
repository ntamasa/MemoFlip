import styles from "./PopUpHeader.module.css";

import Logo from "./Logo";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { closePopUp } from "../features/game/gameSlice";

function PopUpHeader() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(closePopUp());
  }

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <p>MemoFlip</p>
        <Logo moreStyles={styles.logo} />
      </div>

      <Button type="close" onClick={handleClick} />
    </header>
  );
}

export default PopUpHeader;
