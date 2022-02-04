let ninjas = ['juanito', 'pepito', 'sutanito', 'susanita'];
ninjas[0]='Marcelo';
console.log(ninjas[0]);
//console.log(ninjas.join('-'));

// let result = ninjas.indexOf('pepito');

//let result = ninjas.concat(['mario', 'pedro']); concat no afecta el array principal

let result = ninjas.push('nicolas'); //push afecta directamente el array
result = ninjas.pop(); //pop elimina el ultimo elemento del array
console.log(ninjas);