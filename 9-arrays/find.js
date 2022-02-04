const prices = [10, 30, 15, 25, 50, 40, 5];

firstHighScore = prices.find((price) =>{
    return price > 39;
});

console.log(firstHighScore);