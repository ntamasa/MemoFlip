import styles from "../components/Circle.module.css";

import Circle from "../components/Circle";
import Header from "../components/Header";
import Difficulty from "../components/Difficulty";
import Points from "../components/Points";
import Footer from "../components/Footer";

function Rules() {
  return (
    <>
      <Circle styles={styles.circleBig} />

      <Header />
      <Difficulty />
      <Points />
      <Footer />

      <Circle styles={styles.circleSmall} />
    </>
  );
}

export default Rules;
