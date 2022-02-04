const products = [
    {name: 'mario', score:5},
    {name: 'luigi', score:50},
    {name: 'yoshi', score:45},
    {name: 'wario', score:15},
    {name: 'peach', score:30}
]

/* const filtered = products.filter((product)=>{
   return product.score >20;
})
 
const mapped = filtered.map((product)=>{
    return `the ${product.name} is ${product.score/2} pounds `
})
console.log(filtered);
console.log(mapped); */

const promos = products
    .filter(product => product.score >20)
    .map(product =>  `the ${product.name} is ${product.score/2} pounds `)

console.log(promos);