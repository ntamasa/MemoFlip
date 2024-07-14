import styles from "../components/Object.module.css";

import PopUpDarken from "../components/PopUpDarken";
import Object from "../components/Object";
import Footer from "../components/Footer";
import Information from "../components/Information";
import Board from "../features/game/Board";
import PopUp from "../components/PopUp";
import { useSelector } from "react-redux";

function AppLayout() {
  const { status, activePopUp } = useSelector((store) => store.game);

  return (
    <>
      {activePopUp && <PopUpDarken />}

      <Object styles={styles.circleBig} />
      <Information />
      <Object styles={styles.rect} />
      <Board />
      {/* <Footer /> */}
      <Object styles={styles.circleSmall} />

      {activePopUp && (status === "finished" || status === "starting") && (
        <PopUp />
      )}
    </>
  );
}

export default AppLayout;
