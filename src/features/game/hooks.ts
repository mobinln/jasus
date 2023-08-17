import { useAppSelector } from "store";

export function useGamePlayers() {
  return useAppSelector((s) => s.game.players);
}

export function useGameDuration() {
  return useAppSelector((s) => s.game.gameDurationInSeconds);
}

export function useGameWord() {
  return useAppSelector((s) => s.game.word);
}

export function useGame() {
  return useAppSelector((s) => s.game);
}
