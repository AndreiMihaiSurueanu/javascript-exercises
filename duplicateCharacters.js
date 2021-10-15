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


