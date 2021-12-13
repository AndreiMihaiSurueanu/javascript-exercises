/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const L = parseInt(readline());
 const H = parseInt(readline());
 const T = readline();
 
 let text = T.toUpperCase();
 let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
 for (let i = 0; i < H; i++) {
     const ROW = readline();
     let line = '';
     for (let j = 0; j < text.length; j++) {
         let h = abc.indexOf(text[j]);
         if (h > -1) {
             line = line + ROW.slice(h * L, h * L + L);
         } else {
             line = line + ROW.slice(ROW.length - L, ROW.length);
         }
     }
     console.log(line);
 }
 
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 