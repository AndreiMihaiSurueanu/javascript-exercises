/* 
Write a function `canSum(targetSum, numbers)` that takes in a
targetSum and an array of numbers as arguments.

The function should return a boolean indicationg whether or not it
is possible to generate the targetSum using numbers form the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are nonnegative.
 */

// brute force implementation - recursion

// const canSum = (targetSum, numbers) => {
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers) === true) {
//       return true;
//     }
//   }

//   return false;
// };

// memoization solution - Option 1

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    memo[remainder] = canSum(remainder, numbers, memo)
    if (memo[remainder] === true) {
      return true;
    }
  }

  return false;
};

// memoization solution - Option 2

// const canSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) return memo[targetSum];
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers, memo) === true) {
//       memo[targetSum] = true;
//       return true;
//     }
//   }

//   memo[targetSum] = false;
//   return false;
// };

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
