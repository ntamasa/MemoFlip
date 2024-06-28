import styles from "./Footer.module.css";
import Logo from "./Logo";
import Socials from "./Socials";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        &copy; 2024 MemoFlip. All rights reserved!
      </p>
      <Logo moreStyles={styles.logo} />
      <hr className={styles.divider} />
      <Socials />
    </footer>
  );
}

export default Footer;
