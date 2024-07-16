import styles from "../assets/css/Navigation.module.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "./Logo";
import Button from "./Button";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <nav className={`${styles.navbar} ${isOpen ? "dropped" : ""}`}>
      <Logo moreStyles={styles.logo} />

      <ul>
        <Button
          type={!isOpen ? "hamburger" : "close"}
          moreStyles={styles.btn}
          onClick={handleClick}
        >
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
