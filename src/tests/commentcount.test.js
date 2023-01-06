import { commentCount } from '../modules/commentsCounter.js';
/* eslint-disable */
test('returns number of comments as 6', () => {
  const comments = [{ comment: 3 }, { comment: 4 }, { comment: 5 }, { comment: 1 }, { comment: 2 }, { comment: 10 }];
  const count = commentCount(comments);
  expect(count).toBe(6);
});

test('returns number of comments as 1', () => {
  const comments = [{ comment: 4 }];
  const count = commentCount(comments);
  expect(count).toBe(1);
});

test('returns number of comments as 0', () => {
  const comments = [];
  const count = commentCount(comments);
  expect(count).toBe(0);
});
