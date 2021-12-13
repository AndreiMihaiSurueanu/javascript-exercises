/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const L = parseInt(readline());
 const H = parseInt(readline());
 const T = readline();
 
 let text = T.toUpperCase();
 
 for (let i = 0; i < H; i++) {
     const ROW = readline();
     let line = '';
     for (let j = 0; j < text.length; j++) {
         if (text.charCodeAt(j) < 65 || text.charCodeAt(j) > 90) {
             line = line + ROW.slice(ROW.length - L, ROW.length);
         }
         line = line + ROW.slice((text.charCodeAt(j) - 65) * L, (text.charCodeAt(j) - 65) * L + L);
     }
     console.log(line);
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 