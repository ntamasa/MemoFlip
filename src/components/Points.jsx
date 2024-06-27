import styles from "./Points.module.css";

import List from "./List";
import PointsHeader from "./PointsHeader";
import PointsBackground from "./PointsBackground";

function Points() {
  return (
    <section className={styles.points}>
      <PointsHeader />
      <List />

      <PointsBackground styles={styles} />
    </section>
  );
}

export default Points;
