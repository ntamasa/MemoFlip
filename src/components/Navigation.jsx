import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <NavLink to="/rules">Rules</NavLink>
      <NavLink to="/app">Application</NavLink>
    </nav>
  );
}

export default Navigation;
