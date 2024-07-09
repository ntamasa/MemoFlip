import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/cardData.js";

const initialState = {
  content: data,
  flippedCards: [],
  unFlipping: [],
  correctPairs: [],
  isDisabled: false,
  time: 450,
  points: 0,
  tries: 0,
};

function shuffleCards(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    start(state, action) {
      // shuffle cards
      state.content = shuffleCards([...data]);
    },
    clickCard(state, action) {
      // if an already flipped or just disabled action DO NOTHING
      if (
        state.isDisabled ||
        state.flippedCards.some((card) => card.index === action.payload) ||
        state.correctPairs.some((card) => card.index === action.payload)
      )
        return;

      // need to reset cards waiting to be unflipped
      // it is here because unFlipping has to have the data after the render, so it cant be in "unflip"
      state.unFlipping = [];

      state.flippedCards = [
        ...state.flippedCards,
        {
          index: action.payload,
          id: state.content[action.payload].id,
        },
      ];
    },
    disable(state) {
      // initially disable flipping another card
      state.isDisabled = true;
    },
    unflip(state) {
      const [firstCard, secondCard] = state.flippedCards;

      // matching
      if (firstCard.id !== secondCard.id) state.unFlipping = state.flippedCards;
      // does not match
      else state.correctPairs = [...state.correctPairs, ...state.flippedCards];

      state.flippedCards = [];
      state.isDisabled = false;
    },
  },
});

export default gameSlice.reducer;

export const { start, clickCard, disable, unflip } = gameSlice.actions;
