/* 
Write a functino that accepts a string and returns an
integer value representing the number of distinct
duplicated characters within the string, i.e. the number
of characters that appear twice or more.

Your solution should be able to deal with all alphanumeric
and special characters. Your solution should also also  <= this is the original text
treat upper and lower case characters as distinct
characters.

For example: 

Given "Aasdefsgh!!!" the expected result would be '2' ('s'
and '!' are duplicated)
 */
console.log('helo');

function duplicateCharacters(input) {
    let arr = input.split("");
    // console.log(arr)
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        let isDuplicate = input.includes(input[i], i+1) && arr.includes(input[i]);
        if (isDuplicate) {
            count++;
            arr = arr.map(l => (l != input[i]) ? l : '')
        }
    }
    return count;
}

let input = 'Aasdefsgh!!!';
// let input = 'Aasdefseegh!!!';
// let input = '123123';

let res = duplicateCharacters(input);

console.log(res);


