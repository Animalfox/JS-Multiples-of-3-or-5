/**
 * @author Animalfox
 * @description Solution for multiples of 3 or 5
 * 
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Finish the solution so that it returns the sum of all the multiples of 3
 * or 5 below the number passed in.
 * Additionally, if the number is negative, return 0.
 *
 * Note: If the number is a multiple of both 3 and 5, only count it once.
 */

export default function solution(inNumber) {
  if (inNumber < 0) {
    return 0;
  }
  let outSum = 0;

  // that multiplies has been set by this solution rules
  let multiplies = [3, 5];
  let knownMultiplies = [];

  // main logic for multiples of 3 or 5
  for (const m of multiplies) {
    for (let i = 0; i < inNumber; i++) {
      if (i % m === 0) {
        
        // Filter already known multipliers
        const isAlreadyKnown = knownMultiplies.find(known => known == i);
        if (!isAlreadyKnown) {
          outSum += i;
          knownMultiplies.push(i);
        }

      }
    }
  }

  return outSum;
}
