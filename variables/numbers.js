const pi = 3.14;
let radius = 10;

console.log(typeof(pi));

let area;
area = pi * radius**2;
console.log(area);

let likes = 10;

likes += 5;
console.log(likes);

// NaN - Not a Number
// multiplicar o dividir un string da un NaN

//Template String o literal String

let author = "Nicolas Cordoba";
let title = "The emotions in the Crypto Market"

console.log("The blog has "+likes + ' likes');
console.log(`The blog called ${title} by ${author} has ${likes} likes`)