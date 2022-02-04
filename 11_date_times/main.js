/* const now = new Date();

console.log(now);
console.log(typeof now);

//year, months, day, times

console.log('getFullYear;', now.getFullYear());
console.log('getMonth;', now.getMonth());
console.log('getDate;', now.getDate());
console.log('getDay;', now.getDay());
console.log('getHours;', now.getHours());
console.log('getMinutes;', now.getMinutes());
console.log('getSeconds;', now.getSeconds());

//timestamps, los milisegundos transcurridos desde Enero 1 de 1970

console.log('timestamp: ', now.getTime());

//Date Strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());  */

//Clase #2

const before = new Date('February 5 1999 12:34:28')
const now = new Date();

console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();

console.log(diff);

const days = Math.round(diff/1000/60/60/24);

console.log(`Andrea was born ${days} days ago or ${days*24} hours`)

//Convertir timestamps a date objects

console.log(new Date(diff));