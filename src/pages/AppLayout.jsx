import styles from "../assets/css/Object.module.css";

import { useSelector } from "react-redux";

import PopUpDarken from "../components/PopUpDarken";
import Object from "../components/Object";
import Information from "../components/Information";
import Board from "../features/game/Board";
import PopUp from "../components/PopUp";

function AppLayout() {
  const { status, activePopUp } = useSelector((store) => store.game);

  return (
    <>
      {activePopUp && <PopUpDarken />}

      <Object styles={styles.circleBig} />
      <Information />
      <Object styles={styles.rect} />
      <Board />
      <Object styles={styles.circleSmall} />

      {activePopUp && (status === "finished" || status === "starting") && (
        <PopUp />
      )}
    </>
  );
}

export default AppLayout;
