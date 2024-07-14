import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../assets/cardData.js";

const MAX_POINT_UPPER_BOUND = 5;
const MIN_POINT_LOWER_BOUND = 10;

const MAX_POINT = 5;
const MEDIUM_POINT = 3;
const MIN_POINT = 1;

const initialState = {
  content: data,
  flippedCards: [],
  unFlipping: [],
  correctPairs: [],
  isDisabled: false,
  time: 450,
  fullTime: 450,
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
    init(state) {
      state.flippedCards = [];
      state.unFlipping = [];
      state.correctPairs = [];
      state.isDisabled = false;
      state.points = 0;
      state.tries = 0;
      state.activePopUp = false;
      state.status = "starting";
    },
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
      state.tries = 0;
      state.points = 0;
      state.flippedCards = [];
      state.correctPairs = [];
      state.unFlipping = [];

      if (action.payload === "normal") {
        state.time = 450;
        state.fullTime = 450;
      }

      if (action.payload === "hard") {
        state.time = 280;
        state.fullTime = 280;
      }
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
        {
          index: action.payload,
          id: state.content[action.payload].id,
        },
        ...state.flippedCards,
      ];
    },
    move(state) {
      state.tries++;
    },
    disable(state) {
      // initially disable flipping another card
      state.isDisabled = true;
    },
    calcResults(state, action) {
      const [firstCard, secondCard] = state.flippedCards;

      // does not match
      if (firstCard.id !== secondCard.id) {
        state.unFlipping = state.flippedCards;
        // state.status = "unflipping";
      }
      // matching
      else {
        state.correctPairs = [...state.correctPairs, ...state.flippedCards];

        // calcPoints
        console.log(action.payload);
        if (state.tries < MAX_POINT_UPPER_BOUND) state.points += MAX_POINT;
        else if (state.tries > MIN_POINT_LOWER_BOUND) state.points += MIN_POINT;
        else state.points += MEDIUM_POINT;

        state.tries = 0;
        state.isDisabled = false;
      }

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

export const {
  start,
  finish,
  clickCard,
  disable,
  calcResults,
  tick,
  closePopUp,
  move,
  init,
} = gameSlice.actions;
