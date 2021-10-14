console.log('helo');

function duplicateCharacters(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        let isDuplicate = input.includes(input[i], i+1);
        if (isDuplicate) {
            count++;
            input = input.slice(i+1);
        }
    }
    return count;
}

// let input = 'Aasdefsgh!!!';
let input = '123123';

let res = duplicateCharacters(input);

console.log(res);


