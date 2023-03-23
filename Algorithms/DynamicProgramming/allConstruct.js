/* 
Write a function `allConstruct(target, wordBank)` that accepts a
target string and an array of strings.

The function should return a 2D array containing all of the ways
that the `target` can be constructed by concatenating elements of
the `wordBank` array. Each element of the 2D array should represent
one combination that constructs the `target`.

You may reuse elements of `wordBank` as many times as needed.
 */

// brute force implementation - recursion

// const allConstruct = (target, wordBank) => {
//   if (target === '') return [[]];

//   const result = [];

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank);
//       const targetWays = suffixWays.map(way => [word, ...way]);
//       result.push(...targetWays);
//     }
//   }

//   return result;
// }

// memoization solution - Option 1

const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      memo[suffix] = allConstruct(suffix, wordBank, memo);
      const suffixWays = memo[suffix];
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  return result;
}

// memoization solution - Option 2

// const allConstruct = (target, wordBank, memo = {}) => {
//   if (target in memo) return memo[target];
//   if (target === '') return [[]];

//   const result = [];

//   for (let word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixWays = allConstruct(suffix, wordBank, memo);
//       const targetWays = suffixWays.map(way => [word, ...way]);
//       result.push(...targetWays);
//     }
//   }

//   memo[target] = result;
//   return result;
// }

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
// [
//   ['purp', 'le'],
//   ['p', 'ur', 'p', 'le']
// ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
// [
//   ['ab', 'cd', 'ef'],
//   ['ab', 'c', 'def'],
//   ['abc', 'def'],
//   ['abcd', 'ef']
// ]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
// []
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]));
// []
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]));
// []
console.log(allConstruct("aaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa"]));

// console.log(allConstruct("aaaaaaaaaaaaaaaaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa"]));
// [
//   [
//     'a', 'a', 'a', 'a', 'a',
//     'a', 'a', 'a', 'a', 'a',
//     'a', 'a', 'a', 'a', 'a',
//     'a', 'a', 'a', 'a'
//   ],
//   [
//     'a', 'a', 'a',  'a', 'a',
//     'a', 'a', 'a',  'a', 'a',
//     'a', 'a', 'a',  'a', 'a',
//     'a', 'a', 'aa'
//   ],
//   [
//     'a', 'a',  'a', 'a', 'a',
//     'a', 'a',  'a', 'a', 'a',
//     'a', 'a',  'a', 'a', 'a',
//     'a', 'aa', 'a'
//   ],
//   ...
// ]
// console.log(allConstruct("aaaaaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa"]));
// [
//   [
//     'a', 'a', 'a',
//     'a', 'a', 'a',
//     'a', 'a'
//   ],
//   [
//     'a',  'a', 'a',
//     'a',  'a', 'a',
//     'aa'
//   ],
//   [
//     'a', 'a', 'a',
//     'a', 'a', 'aa',
//     'a'
//   ],
//   [ 'a', 'a', 'a', 'a', 'a', 'aaa' ],
//   ...
// ]
// console.log(allConstruct("aaaaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa"]));
// [
//   [
//     'a', 'a', 'a',
//     'a', 'a', 'a',
//     'a'
//   ],
//   [ 'a', 'a', 'a', 'a', 'a', 'aa' ],
//   [ 'a', 'a', 'a', 'a', 'aa', 'a' ],
//   [ 'a', 'a', 'a', 'a', 'aaa' ],
//   [ 'a', 'a', 'a', 'aa', 'a', 'a' ],
//   ...
// ]
