import { useAppSelector } from "store";

export function useGamePlayers() {
  return useAppSelector((s) => s.game.players);
}

export function useGameWord() {
  return useAppSelector((s) => s.game.word);
}
