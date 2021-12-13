// Which of the following are valid ways to create an object in JavaScript?

// var person = {FirstName = "John", LastName = "Galt"};     // ❗❗❗

// var person = new Object(FirstName = "John", LastName = "Galt");   // ❓❓❓

// var person = {"FirstName" : "John", "LastName" : "Galt"};     // ✅

// var person = new Object();          // ✅

// person.FirstName = "John";          // ✅

// person.LastName = "Galt";          // ✅

// var person = new {FirstName = "John", LastName = "Galt"};   // ❗❗❗

var person = {FirstName : "John", LastName : "Galt"};   // ✅

console.log(person)