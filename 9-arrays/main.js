const prices = [10, 30, 15, 25, 50, 40, 5];

//Filter

// const filteredScores = scores.filter((score)=>{
//     return score > 20;
// })
// console.log(filteredScores )

//MAP

// const saleProducts = products.map((product)=>{
//     if(product.price>30){
//         return {name: product.name, price: product.price/2}
//     } else{
//         return product;
//     }
// });
// const salePrices = prices.map((price)=>{
//     return price/2;
// })
// console.log(salePrices)
// const productsSale = products.map((product)=>{
//     if(product.price>30){
//         return {name: product.name, price: product.price/2};
//     }
//     else{
//         return product;
//     }
// })

//Reduce

const result = prices.reduce((acc, curr)=>{
    if(curr < 50){
        acc++;
    }
    return acc;
}, 0);

console.log(result)



