import List from "./List";
import styles from "./Points.module.css";

import PointsHeader from "./PointsHeader";

function Points() {
  return (
    <section className={styles.points}>
      <PointsHeader />
      <List />
    </section>
  );
}

export default Points;
