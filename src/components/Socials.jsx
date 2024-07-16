import styles from "../assets/css/Socials.module.css";

import Facebook from "../assets/js/Facebook";
import Instagram from "../assets/js/Instagram";
import LinkedIn from "../assets/js/LinkedIn";
import TwitterX from "../assets/js/TwitterX";
import Github from "../assets/js/Github";

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
