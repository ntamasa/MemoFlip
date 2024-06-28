import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";
import Logo from "./Logo";
import Button from "./Button";

function Navigation() {
  const isOpen = false;

  return (
    <nav className={`${styles.navbar} ${isOpen ? "dropped" : ""}`}>
      <Logo moreStyles={styles.logo} />

      <ul>
        <Button type="hamburger" moreStyles={styles.btn}>
          &nbsp;
        </Button>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/app">Play</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
