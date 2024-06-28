import { useEffect, useState } from "react";
import imgUrl from "../../public/points-background.png";
import smallImgUrl from "../../public/small-points-background.png";

function HomeBackground({ styles }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 800);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 800);
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <img
      className={styles.background}
      src={isSmallScreen ? smallImgUrl : imgUrl}
      alt="Background of the section with some abstract 3D geometric shapes."
    />
  );
}

export default HomeBackground;
