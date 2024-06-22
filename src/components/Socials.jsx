import styles from "./Socials.module.css";

import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import LinkedIn from "../assets/LinkedIn";
import TwitterX from "../assets/TwitterX";
import Github from "../assets/Github";

function Socials() {
  return (
    <div className={styles.socials}>
      <Github />
      <LinkedIn />
      <Instagram />
      <Facebook />
      <TwitterX />
    </div>
  );
}

export default Socials;
