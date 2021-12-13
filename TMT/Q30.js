// Wich of the following would be the correct way to read the "age " property of a "person" object?
const person = {
    age : 21
}
const age = 'age'
console.log(person.age)
// This is CSS selector, it will never work in JavaScript
// console.log(person::age)
// You need a variable for this to work -- const age = 'age' 
console.log(person[age])
console.log(person['age'])

// The answer is: person.age and person['age'] ... 🤷‍♂️😄
