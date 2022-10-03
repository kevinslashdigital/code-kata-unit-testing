const math = require('./math');

test('Sum 3 and 4 to get 7', () => {
  expect(math.sum(3, 4)).toBe(7);
});

test('Check if 11 is above 10', () => {
  expect(math.aboveTen(11)).toBeTruthy();
});

test('Check if 9 is above 10', () => {
  expect(math.aboveTen(9)).toBe(false);
});
