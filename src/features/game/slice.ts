import { createSlice } from "@reduxjs/toolkit";
import { getRandomIndexes } from "logic/random";
import { getRandomWord } from "logic/word";

type playerType = {
  id: number;
  type: "normal" | "spy";
};

type gameSliceType = {
  status: "idle" | "generated" | "started";
  players?: playerType[];
  numberOfPlayers?: number;
  numberOfSpies?: number;
  gameDurationInSeconds?: number;
  elapsedTime?: number;
  word?: string;
};

const initialState: gameSliceType = {
  status: "idle",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    generateGame(state, action) {
      const word = getRandomWord();
      const randomIndexes = getRandomIndexes(action.payload.numberOfPlayers, action.payload.numberOfSpies);
      const players: playerType[] = [];
      for (let i = 0; i < action.payload.numberOfPlayers; i++) {
        if (randomIndexes.includes(i)) {
          players.push({ id: i, type: "spy" });
        } else {
          players.push({ id: i, type: "normal" });
        }
      }

      state.status = "generated";
      state.players = players;
      state.numberOfPlayers = action.payload.numberOfPlayers;
      state.numberOfSpies = action.payload.numberOfSpies;
      state.gameDurationInSeconds = action.payload.gameDurationInSeconds;
      state.word = word;
    },
    selectNewWord(state) {
      const word = getRandomWord();

      state.status = "generated";
      state.word = word;
    },
    startGame(state) {
      state.status = "started";
    },
    setElapsedTime(state, action) {
      state.elapsedTime = action.payload.elapsedTime;
    },
    finishGame(state) {
      state.status = "idle";
      state.players = undefined;
      state.numberOfPlayers = undefined;
      state.numberOfSpies = undefined;
      state.gameDurationInSeconds = undefined;
      state.elapsedTime = undefined;
      state.word = undefined;
    },
  },
});

export default gameSlice.reducer;

export const { finishGame, generateGame, setElapsedTime, startGame, selectNewWord } = gameSlice.actions;
