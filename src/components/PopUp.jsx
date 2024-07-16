import styles from "../assets/css/PopUp.module.css";
import objectStyles from "../assets/css/Object.module.css";

import { useSelector } from "react-redux";

import Object from "./Object";
import PopUpHeader from "./PopUpHeader";
import PopUpMain from "./PopUpMain";
import PopUpActions from "./PopUpActions";
import PopUpFooter from "./PopUpFooter";
import PopUpBackground from "./PopUpBackground";

function PopUp() {
  const { content, correctPairs, status } = useSelector((store) => store.game);

  const isWin = correctPairs.length === content.length;

  return (
    <div className={styles.popup}>
      <Object styles={objectStyles.circlePopUp} />

      <PopUpHeader />
      <PopUpMain />
      <PopUpActions>
        {status !== "finished"
          ? ""
          : isWin
          ? "Up for another round?"
          : "Want to try again?"}
      </PopUpActions>
      <PopUpFooter />

      <PopUpBackground styles={styles} />
    </div>
  );
}

export default PopUp;
