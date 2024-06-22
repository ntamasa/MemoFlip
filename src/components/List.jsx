import styles from "./List.module.css";
import ListItem from "./ListItem";
import listItems from "../assets/listItems.js";

function List() {
  return (
    <ul className={styles.list}>
      {listItems.map((item, i) => (
        <ListItem
          icon={item.icon}
          heading={item.heading}
          text={item.text}
          key={i}
        />
      ))}
    </ul>
  );
}

export default List;
