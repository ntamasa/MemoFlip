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
  const isEnd = true;

  return (
    <div className={styles.popup}>
      <Object styles={objectStyles.circlePopUp} />

      <PopUpHeader />
      <PopUpMain />
      <PopUpActions isEnd={isEnd}>
        {!isEnd ? "" : isWin ? "Up for another round?" : "Want to try again?"}
      </PopUpActions>
      <PopUpFooter />

      <PopUpBackground styles={styles} />
    </div>
  );
}

export default PopUp;
