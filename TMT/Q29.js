// After the following JavaScript code is run which of the following statements will evaluate to true?

var Person = function(firstName, lastName, dateOfBirth, measurements) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth =dateOfBirth;
    this.measurements = measurements;
}

person = new Person('Jim', 'Perice', new Date(2013, 2, 12), {weight: '70kg'})
personClone = JSON.parse(JSON.stringify(person))

// Shallow copy -- Preserves the Date object
// personClone = {...person}
// Does not change personClone, it is a copy not a reference
// person.firstName = 'Jane'
let firstName = 'firstName'
// Throws error
// console.log(person.dateOfBirth.toDateString() === personClone.dateOfBirth.toDateString())
console.log(person === personClone)
console.log(person.firstName === personClone.firstName)
console.log(person.measurements['weight'] === personClone.measurements['weight'])

// Checks
// console.log(person)
// console.log(person.dateOfBirth.toDateString())
// console.log(personClone)

// The answer is: option three and four
// person.firstName === personClone.firstName
// person.measurements['weight'] === personClone.measurements['weight'] 🙂
