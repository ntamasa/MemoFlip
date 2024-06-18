import styles from "./Logo.module.css";
import logo from "../assets/logo.png";

function Logo() {
  return (
    <img className={styles.logo} src={logo} alt="Logo of the application" />
  );
}

export default Logo;
