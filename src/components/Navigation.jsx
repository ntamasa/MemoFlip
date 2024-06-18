import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className={styles.navbar}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/rules">Rules</NavLink>
        </li>
        <li>
          <NavLink to="/app">Application</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
