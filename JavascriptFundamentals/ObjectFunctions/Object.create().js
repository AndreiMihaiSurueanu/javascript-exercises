/* 
Object.create(prototype, propertiesObject) method
propertiesObject same as 2nd argument from Object.defineProperties()
 */

let obj = {
    name: 'The Dude'
};

let obj2 = Object.create(obj, {
    age: {value: 12, enumerable: true}
});
// console.log(obj2);
// console.log(obj2.name);

let obj3 = Object.create(obj2, {
    fullName: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 'Jeff Lebowski'
    },
    canBowl: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: true
    }
});
// console.log(obj3);
// console.log(obj3.name);
// console.log(obj3.__proto__);
// console.log(Object.getOwnPropertyDescriptors(obj3.__proto__));

// console.log(Object.__proto__);
// console.log(Object.getOwnPropertyDescriptors(Object.__proto__));

// console.log(Array.__proto__)
// console.log(Object.getOwnPropertyDescriptors(Array.__proto__));
console.log(Array.prototype)
// console.log(Object.getOwnPropertyDescriptors(Array.prototype))
console.log(Array)
console.log([].__proto__)
// console.log([] instanceof Array)
// console.log(Object.getOwnPropertyDescriptors([].__proto__))

// let ha = Object.name = 'me';
// console.log(Object.getOwnPropertyDescriptors(ha.__proto__))
// console.log(ha.valueOf)

// console.log(Object.getPrototypeOf(obj3));
// console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(obj3)));

// console.log(Object.getPrototypeOf(Object.getPrototypeOf(obj3)));
// console.log(Object.getOwnPropertyDescriptors(Object.getPrototypeOf(Object.getPrototypeOf(obj3))));
