import Main from "./Main";
import styles from "./Points.module.css";

import PointsHeader from "./PointsHeader";

function Points() {
  return (
    <section className={styles.points}>
      <PointsHeader />
      <Main />
    </section>
  );
}

export default Points;
