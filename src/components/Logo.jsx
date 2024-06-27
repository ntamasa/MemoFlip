import styles from "./Logo.module.css";
import logo from "../../public/logo.png";

function Logo({ moreStyles = null }) {
  return (
    <img
      className={`${styles.logo} ${moreStyles}`}
      src={logo}
      alt="Logo of the application"
    />
  );
}

export default Logo;
