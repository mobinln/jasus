export function formatSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
