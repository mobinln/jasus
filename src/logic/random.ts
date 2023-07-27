export function getRandomNumberInInterval(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Invalid interval: min must be less than max.");
  }

  const randomValue = Math.random();
  const scaledValue = randomValue * (max - min);
  const result = min + scaledValue;

  return Math.round(result);
}

export function getRandomIndexes(length: number, n: number): number[] {
  if (n > length) {
    throw new Error("The number of indexes 'n' cannot be greater than the length.");
  }

  const indexesSet: Set<number> = new Set();
  const randomIndexes: number[] = [];

  while (indexesSet.size < n) {
    const randomIndex = Math.floor(Math.random() * length);
    if (!indexesSet.has(randomIndex)) {
      indexesSet.add(randomIndex);
      randomIndexes.push(randomIndex);
    }
  }

  return randomIndexes;
}
