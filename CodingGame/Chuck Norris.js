/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const MESSAGE = readline();
 let binary = '';
 let answer = '';
 for (var i = 0; i < MESSAGE.length; i++) {
     let b = MESSAGE.charCodeAt(i).toString(2);
     if (b.length < 7) {
         binary += '0' + MESSAGE.charCodeAt(i).toString(2);
     } else {
         binary += MESSAGE.charCodeAt(i).toString(2);
     }
 }
 console.error(binary)
 while (binary.length > 0) {
     // console.log(binary.length)
     let c = 1;
     let l = binary[0];
     for (let index = 1; index < binary.length; index++) {
         if (binary[index] === l) {
             c++;
         } else {
             break;
         }
     }
     binary = binary.slice(c);
     if (l === '1') {
         answer += '0 ';
         for (let index = 0; index < c; index++) {
             answer += '0';
         }
         if (binary.length > 0) {
             answer += ' ';
         }
     }
     if (l === '0') {
         answer += '00 ';
         for (let index = 0; index < c; index++) {
             answer += '0';
         }
         if (binary.length > 0) {
             answer += ' ';
         }
     }
 }
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(answer);
 