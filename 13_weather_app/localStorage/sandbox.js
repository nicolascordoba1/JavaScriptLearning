//Storage data in local storage

localStorage.setItem('name', 'mario');
localStorage.setItem('age', 50); 

//get the data 

let name = localStorage.getItem('name');
let age = localStorage.getItem('age');

console.log(name, age)

//updating data

localStorage.setItem('name', 'luigi');
localStorage.age = '40';

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);

//deleting data

//single items

/* localStorage.removeItem('name');

name =  localStorage.getItem('name');

console.log(name) */

//all items

localStorage.clear()

name = localStorage.getItem('name');
age = localStorage.getItem('age');
console.log(name, age);