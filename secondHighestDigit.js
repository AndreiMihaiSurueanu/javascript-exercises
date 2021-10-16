/* 
Write a function that accepts a string and returns the
second highest numerical digit in the input as an
interger.

The following rules should apply:
    - Inputs with no numerical digits should reutrn -1
    - Inputs with only one numerical digit should return -1
    - Non-numeric input should be treated individually,
      meaning in the event of a joint highest digit then the
      second highest digit will also be the highest digit

For example:

    - "abc:1231234" returns 3
    - "123123" returns 3
 */
console.log('helo');

function secondHighestDigit(input) {
    let secondHighest = -1;
    let arr = input.match(/[0-9]/g);
    if (!arr || !(arr.length > 1)) {
        return secondHighest;
    }
    let highest = arr[0]; secondHighest = arr[0];
    console.log(arr)
    for (let i = 1; i < arr.length; i++) {
        let isDuplicate = arr.includes(arr[i], i+1);
        if (arr[i] > secondHighest) {
            secondHighest = highest;
            highest = arr[i];
        }
        if (isDuplicate) {
            secondHighest = highest;
        }
    }
    return secondHighest;
}

// let input = 'abc:1231234';
// let input = 'abc:11';
let input = '123123';

let res = secondHighestDigit(input);

console.log(res);


