import imgUrl from "../assets/points-background.png";

function Background({ styles }) {
  return (
    <img
      className={styles.background}
      src={imgUrl}
      alt="Background of the section with some abstract 3D geometric shapes."
    />
  );
}

export default Background;
