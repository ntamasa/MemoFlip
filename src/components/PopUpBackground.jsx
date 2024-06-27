import imgUrl from "../../public/popup-shapes.png";

function PopUpBackground({ styles }) {
  return (
    <img
      className={styles.background}
      src={imgUrl}
      alt="Background of the section with some abstract 3D geometric shapes."
    />
  );
}

export default PopUpBackground;
