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
  status: "starting",
  activePopUp: false,
};

function shuffleCards(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    start(state, action) {
      if (!action.payload) {
        state.activePopUp = true;
        return;
      }

      // shuffle cards
      state.content = shuffleCards([...data]);
      state.status = "gaming";
      state.isDisabled = false;
      state.activePopUp = false;

      if (action.payload === "normal") state.time = 450;

      if (action.payload === "hard") state.time = 280;
    },
    finish(state) {
      state.status = "finished";
      state.isDisabled = true;
      state.activePopUp = true;
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
    tick(state) {
      state.time--;
    },
    closePopUp(state) {
      state.activePopUp = false;
      state.isDisabled = true;
    },
  },
});

export default gameSlice.reducer;

export const { start, finish, clickCard, disable, unflip, tick, closePopUp } =
  gameSlice.actions;
