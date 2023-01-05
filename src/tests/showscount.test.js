import { itemCount } from '../modules/itemscounter.js';
/* eslint-disable */
test('returns number of shows as 6', () => {
  const shows = [{ item: 3 }, { item: 4 }, { item: 5 }, { item: 1 }, { item: 2 }, { item: 10 }];
  const count = itemCount(shows);
  expect(count).toBe(6);
});

test('returns number of shows as 1', () => {
  const shows = [{ item: 4 }];
  const count = itemCount(shows);
  expect(count).toBe(1);
});

test('returns number of shows as 0', () => {
  const shows = [];
  const count = itemCount(shows);
  expect(count).toBe(0);
});
