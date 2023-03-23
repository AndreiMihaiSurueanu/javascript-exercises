/* 
Write a function `bestSum(targetSum, numbers)` that takes in a
targetSum and an array of numbers as arguments.

The function should return an array containing the shortest
combination of numbers that add up to exactly the targetSum.

If there is a tie for the shortest combination, you may return any
one of the shortest.
 */

// brute force implementation - recursion

// const bestSum = (targetSum, numbers) => {
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   let shortestCombination = null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderCombination = bestSum(remainder, numbers);
//     if (remainderCombination !== null) {
//       const combination = [ ...remainderCombination, num ];
//       if (shortestCombination === null || combination.length < shortestCombination.length) {
//         shortestCombination = combination;
//       }
//     }
//   }

//   return shortestCombination;
// };

// memoization solution - Option 1

const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [ ...remainderCombination, num ];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        memo[targetSum] = combination;
        shortestCombination = memo[targetSum];
      }
    }
  }

  return shortestCombination;
};

// memoization solution - Option 2

// const bestSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return [];
//   if (targetSum < 0) return null;

//   let shortestCombination = null;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     const remainderCombination = bestSum(remainder, numbers, memo);
//     if (remainderCombination !== null) {
//       const combination = [ ...remainderCombination, num ];
//       if (shortestCombination === null || combination.length < shortestCombination.length) {
//         shortestCombination = combination;
//       }
//     }
//   }

//   memo[targetSum] = shortestCombination;
//   return shortestCombination;
// };

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
