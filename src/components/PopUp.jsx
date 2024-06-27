import styles from "./PopUp.module.css";
import objectStyles from "./Object.module.css";

import Object from "./Object";
import PopUpHeader from "./PopUpHeader";
import PopUpMain from "./PopUpMain";
import PopUpActions from "./PopUpActions";
import PopUpFooter from "./PopUpFooter";
import PopUpBackground from "./PopUpBackground";

function PopUp() {
  const isWin = false;

  return (
    <div className={styles.popup}>
      <Object styles={objectStyles.circlePopUp} />

      <PopUpHeader />
      <PopUpMain />
      <PopUpActions>
        {isWin ? "Up for another round?" : "Want to try again?"}
      </PopUpActions>
      <PopUpFooter />

      <PopUpBackground styles={styles} />
    </div>
  );
}

export default PopUp;
