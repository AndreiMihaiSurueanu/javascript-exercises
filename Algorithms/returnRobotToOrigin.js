/*
You are given an input string that controls the movement 
of a robot, "F" means take a step forward, "L" means turn
90 degrees to the left and "R" means turn 90 degrees to
the right. E.g. "FLF" moves the robot one step forward,
then turns it left by 90 degrees, then moves the robot one 
step forward. Write a function that returns the minimum
number of commands that the robot needs to return
to its starting point after following all the input 
commands. You should ignore any characters that are not
capital F, L, or R. Hint: you may wish to track the robot's
position using (X,Y) coordinates, assunming it starts at
(0,0).

For example: 

    - "RF" returns 3 (robot must turn twice and move
        forward one step (eg. "RRF")
    - "LFRFRFR" returns 1 (robot must step forward to
        return)
    - "FxLxLxFx" returns 0 (robot is already back at its
        starting point)
*/

console.log('helo');

function flr(directions) {
    let arr = directions.match(/F|L|R/g);
    console.log(arr)
    let position = [0,0];
    // 0 -> up, 1 -> right, 2 -> down, 3 -> left
    let way = 0;
    arr.forEach( (element, index, arr) => {
        if (element === "R") {
            way === 3 ? way = 0 : way++;
        }
        if (element === "L") {
            way === 0 ? way = 3 : way--;
        }
        if (element === "F") {
            switch (way) {
                case 0:
                    position[1]++;
                    break;
                case 1:
                    position[0]++;
                    break;
                case 2:
                    position[1]--;
                    break;
                case 3:
                    position[0]--;
                    break;
                default:
                    break;
            }
        }
    });
    console.log(position)

    let noOfComands = 0;
    if (position[0] > 0) {
        noOfComands += position[0];
        way == 1 ? noOfComands += 2 : (way == 0 || way == 2) ? noOfComands++ : noOfComands;
    }
    if (position[0] < 0) {
        noOfComands += Math.abs(position[0]);
        way == 3 ? noOfComands += 2 : (way == 0 || way == 2) ? noOfComands++ : noOfComands;
    }
    if (position[1] > 0) {
        noOfComands += position[1];
        way == 0 ? noOfComands += 2 : (way == 1 || way == 3) ? noOfComands++ : noOfComands;
    }
    if (position[1] < 0) {
        noOfComands += Math.abs(position[1]);
        way == 2 ? noOfComands += 2 : (way == 1 || way == 3) ? noOfComands++ : noOfComands;
    }

    return noOfComands;
}

// let directions = 'RF'
// let directions = 'LFRFRFR'
let directions = 'FxLxLxFx'

let res = flr(directions);

console.log(res);


