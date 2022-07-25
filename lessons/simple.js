/**
 * We have two functions, `sum` and `subtract` ,
 * that are ready to be tested.
 *
 * Task: check if the results are the respects.
 *
 *            **BONUS**
 * Throw an error if the test fails.
 *
 *
 * Execute: Use `node lessons/simple.js` to run the test.
 */

const { sum, subtract } = require('../math');

test('sum adds numbers', () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).tobe(expected);
});

test('subtract subtracts numbers', () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).tobe(expected);
});



/**
 * Hint: there's no magic, just the most straightforward conditional statement.
 *
 * Answer: Checkout the main branch for the answer.
 */
