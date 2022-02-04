let age =23;
let year = 1997;
console.log(age, year);

age = 24;
console.log(age);

const points = 100;
console.log(points);

let firstName = "Nicolás";
let lastName = "Córdoba";
let fullName = firstName + ' ' +lastName;

console.log(fullName);
console.log(fullName.length);

console.log(fullName.toUpperCase());

let email = "nicolascordoba97@hotmail.com";
let result = email.lastIndexOf('o');
result = email.slice(0,7)
result = email.substr(4,7);
result = email.replace('nicolas', 'santiago');
console.log(result);