import styles from "./PopUp.module.css";
import PopUpActions from "./PopUpActions";

import PopUpHeader from "./PopUpHeader";
import PopUpMain from "./PopUpMain";

function PopUp() {
  const isWin = true;

  return (
    <div className={styles.popup}>
      <PopUpHeader />
      <PopUpMain />
      <PopUpActions>
        {isWin ? "Up for another round?" : "Want to try again?"}
      </PopUpActions>
    </div>
  );
}

export default PopUp;
