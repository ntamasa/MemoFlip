import styles from "./ListItem.module.css";

function ListItem({ icon: Icon, heading, text }) {
  return (
    <li className={styles.item}>
      <Icon styles={styles} />

      <h3 className={styles.heading}>{heading}</h3>
      <p className={styles.text}>{text}</p>
    </li>
  );
}

export default ListItem;
