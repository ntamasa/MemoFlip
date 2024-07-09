import styles from "../components/Object.module.css";

import Object from "../components/Object";
import Footer from "../components/Footer";
import Information from "../components/Information";
import Board from "../features/game/Board";
import PopUp from "../components/PopUp";

function AppLayout() {
  const isActivePopUp = false;

  return (
    <>
      <Object styles={styles.circleBig} />
      <Information />
      <Object styles={styles.rect} />
      <Board />
      <Footer />
      <Object styles={styles.circleSmall} />

      {isActivePopUp && <PopUp />}
    </>
  );
}

export default AppLayout;
