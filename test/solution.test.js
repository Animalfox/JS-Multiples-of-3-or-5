/**
 * @description
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Finish the solution so that it returns the sum of all the multiples of 3
 * or 5 below the number passed in.
 * Additionally, if the number is negative, return 0.
 *
 * Note: If the number is a multiple of both 3 and 5, only count it once.
 */

import { assert } from "chai";
import solution from "../src/solution.js";

describe("solution function", () => {
  // Describe a shortcut for test function
  function doTest(input, expected) {
    const actual = solution(input);
    const error = `Incorrect answer for input="${input}"`;
    assert.strictEqual(actual, expected, error);
  }

  it("Basic tests", () => {
    doTest(5, 3);
    doTest(6, 8);
    doTest(10, 23);
  });
  it("Tests with already known multipliers", () => {
    doTest(20, 78);
  });
});
