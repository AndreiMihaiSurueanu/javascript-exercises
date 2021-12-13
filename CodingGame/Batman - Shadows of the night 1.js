/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const W = parseInt(inputs[0]); // width of the building.
 const H = parseInt(inputs[1]); // height of the building.
 const N = parseInt(readline()); // maximum number of turns before game over.
 var inputs = readline().split(' ');
 var X0 = parseInt(inputs[0]);
 var Y0 = parseInt(inputs[1]);
 let top = 0, bottom = H, left = 0, right = W;
 // game loop
 while (true) {
     const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
 
     if (bombDir == 'DR') {
         left = X0 + 1; top = Y0 + 1;
         X0 = Math.floor((right - left) / 2) + left;
         Y0 = Math.floor((bottom - top) / 2) + top;
     }
     if(bombDir == 'DL') {
         right = X0 - 1; top = Y0 + 1;
         X0 = Math.floor((right - left) / 2) + left;
         Y0 = Math.floor((bottom - top) / 2) + top;
     }
     if(bombDir == 'UR') {
         left = X0 + 1; bottom = Y0 - 1;
         X0 = Math.floor((right - left) / 2) + left;
         Y0 = Math.floor((bottom - top) / 2) + top;
     }
     if(bombDir == 'UL') {
         right = X0 - 1; bottom = Y0 - 1;
         X0 = Math.floor((right - left) / 2) + left;
         Y0 = Math.floor((bottom - top) / 2) + top;
     }
     if(bombDir == 'U') {
         bottom = Y0 - 1;
         Y0 = Math.floor((bottom - top) / 2) + top;
     }
     if (bombDir == 'D') {
         top = Y0 + 1;
         Y0 = Math.floor((bottom - top) / 2) + top;
     }
     if(bombDir == 'L') {
         right = X0 - 1;
         X0 = Math.floor((right - left) / 2) + left;
     }
     if (bombDir == 'R') {
         left = X0 + 1;
         X0 = Math.floor((right - left) / 2) + left;
     }
     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
 
     // the location of the next window Batman should jump to.
     console.log(X0 + " " + Y0);
 }
 