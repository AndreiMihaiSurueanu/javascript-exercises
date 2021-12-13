// After the following JavaScript code is run which of the following is true?

var a = ['apple', 'banana', 'coconut']
var b = a
var c = a.slice()
a.push('date')

console.log(b, c)

// The answer is: 
// b = [ 'apple', 'banana', 'coconut', 'date' ] and
// c = [ 'apple', 'banana', 'coconut' ] ... ✅
