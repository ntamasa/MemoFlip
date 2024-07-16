import styles from "../assets/css/PopUpFooter.module.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

import { closePopUp } from "../features/game/gameSlice";

function PopUpFooter() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(closePopUp());
    navigate("/");
  }

  return (
    <footer className={styles.footer}>
      <Button type="later" onClick={handleClick}>
        No, I want to play later.
      </Button>
    </footer>
  );
}

export default PopUpFooter;
