/* 
Triple Double
Have the function TripleDouble(num1,num2) take both parameters being passed, 
and return 1 if there is a straight triple of a number at any place in num1 
and also a straight double of the same number in num2. For example: if num1 
equals 451999277 and num2 equals 41177722899, then return 1 because in the 
first parameter you have the straight triple 999 and you have a straight 
double, 99, of the same number in the second parameter. If this isn't the case, return 0.
Examples
Input: 465555 & num2 = 5579
Output: 1
Input: 67844 & num2 = 66237
Output: 0
Browse Resources
 */


function TripleDouble(num1,num2) { 

  // code goes here  

  if(num1 < 111) return 0;

  if(num2 < 11) return 0;

  let num1_copy = num1.toString(), num2_copy = num2.toString();
  let triple = num1_copy[0], double = num2_copy[0];

  for (let i = 1; i < num1_copy.length; i++){
    if(triple.length == 3){
      double = num2_copy[0];

      for (let j = 1; j < num2_copy.length; j++){
        if(double.length == 2){
          break;
        }
        if(num2_copy[j] === double[0] && triple[0] === double[0]){
          double += num2_copy[j];
        } else {
          double = num2_copy[j];
        }
      }

      if(double.length == 2){
       return 1; 
      }
    }
    if(num1_copy[i] === triple[0]){
      triple += num1_copy[i];
    } else {
      triple = num1_copy[i];
    }
  }

  return 0; 

}
   
// keep this function call here 
console.log(TripleDouble(readline()));