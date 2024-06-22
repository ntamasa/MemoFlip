import styles from "./Points.module.css";

import List from "./List";
import PointsHeader from "./PointsHeader";
import Background from "./Background";

function Points() {
  return (
    <section className={styles.points}>
      <PointsHeader />
      <List />

      <Background styles={styles} />
    </section>
  );
}

export default Points;
