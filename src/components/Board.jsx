import styles from "./Board.module.css";
import Card from "./Card";
import { data } from "../assets/cardData.js";
import { useEffect, useState } from "react";

function shuffleCards(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function Board() {
  const [content, setContent] = useState(data);

  // shuffle cards, on mount
  useEffect(() => {
    setContent(shuffleCards([...data]));
  }, []);

  return (
    <main className={styles.board}>
      {Array.apply(null, Array(30)).map((_, i) => (
        <Card key={i} id={content[i]?.id}>
          {content[i]?.emoji}
        </Card>
      ))}
    </main>
  );
}

export default Board;
