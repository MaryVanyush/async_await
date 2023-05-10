import json from './parser';
import read from './reader';
import GameSavingLoader from './GameSavingLoader';

(async () => {
  try {
    const data = await GameSavingLoader.load(read());
    const value = await GameSavingLoader.load(json(data));
    const gameSaving = JSON.parse(value);
    return gameSaving;
  } catch (error) {
    throw new Error(error);
  }
})();
