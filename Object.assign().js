/* 
Object.assign(traget, sources...) method
used to copy objects OR
to merge objects
 */

let obj1 = {"arms":true, "armCount":2};
let obj2 = {"weapons":['missle launcher', 'reciprocating saw']};
let obj3 = {"canMove":true, "legs":0,"treads":2};

let arms = Object.assign({'hasHands':true, "arms": false}, obj1);
console.log(arms)

let robot = Object.assign({'hasHands':true, "arms": false}, obj1, obj2, obj3);
console.log(robot);


