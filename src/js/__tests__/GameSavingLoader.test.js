import json from '../parser';
import read from '../reader';
import GameSavingLoader from '../GameSavingLoader';

jest.setTimeout(10000);

test('check clase GameSavingLoader', async () => {
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  const data = await GameSavingLoader.load(read());
  const value = await GameSavingLoader.load(json(data));
  const gameSaving = JSON.parse(value);
  expect(gameSaving).toEqual(expected);
});
