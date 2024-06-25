import styles from "./Board.module.css";
import Card from "./Card";

function Board() {
  return (
    <main className={styles.board}>
      {Array.apply(null, Array(30)).map((_, i) => (
        <Card key={i} />
      ))}
    </main>
  );
}

export default Board;
