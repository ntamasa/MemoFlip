import styles from "./Board.module.css";
import Card from "./Card";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { disable, start, move, calcResults } from "./gameSlice.jsx";

function Board() {
  const dispatch = useDispatch();
  const { content, flippedCards } = useSelector((store) => store.game);

  useEffect(() => {
    dispatch(start());
  }, [dispatch]);

  useEffect(() => {
    if (flippedCards.length !== 2) return;

    // add a try to all for converting points
    dispatch(move());
    dispatch(disable());

    // wait 1.5s before another action
    const timer = setTimeout(() => {
      dispatch(calcResults());
    }, 0);

    return () => clearTimeout(timer);
  }, [dispatch, flippedCards]);

  return (
    <main className={styles.board}>
      {content.slice(0, 30).map((item, i) => (
        <Card key={i} index={i}>
          {item.emoji}
        </Card>
      ))}
    </main>
  );
}

export default Board;
