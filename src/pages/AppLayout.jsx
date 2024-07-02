import styles from "../components/Object.module.css";

import Object from "../components/Object";
import Footer from "../components/Footer";
import Information from "../components/Information";
import Board from "../components/Board";
import PopUp from "../components/PopUp";

function AppLayout() {
  return (
    <>
      <Object styles={styles.circleBig} />

      <Information />

      <Object styles={styles.rect} />

      <Board />
      <Footer />
      <Object styles={styles.circleSmall} />

      {/* <PopUp /> */}
    </>
  );
}

export default AppLayout;
