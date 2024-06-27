import imgUrl from "../../public/points-background.png";

function HomeBackground({ styles }) {
  return (
    <img
      className={styles.background}
      src={imgUrl}
      alt="Background of the section with some abstract 3D geometric shapes."
    />
  );
}

export default HomeBackground;
