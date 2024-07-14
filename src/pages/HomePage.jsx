import styles from "../components/Object.module.css";

import Object from "../components/Object";
import Header from "../components/Header";
import Difficulty from "../components/Difficulty";
import Points from "../components/Points";

function Rules() {
  return (
    <>
      <Object styles={styles.circleBig} />

      <Header />

      <Object styles={styles.rect} />

      <Difficulty />
      <Points />

      <Object styles={styles.circleSmall} />
    </>
  );
}

export default Rules;
