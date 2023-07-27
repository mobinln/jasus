import animalsFa from "assets/db/fa/animalsFa.json";
import carsFa from "assets/db/fa/carsFa.json";
import colorsFa from "assets/db/fa/colorsFa.json";
import jobsFa from "assets/db/fa/jobsFa.json";
import placesFa from "assets/db/fa/placesFa.json";
import wordsFa from "assets/db/fa/wordsFa.json";

import { getRandomNumberInInterval } from "./random";

export function getRandomWord() {
  const pool = [...animalsFa, ...carsFa, ...colorsFa, ...jobsFa, ...placesFa, ...wordsFa];
  const index = getRandomNumberInInterval(0, pool.length);

  return pool[index];
}
