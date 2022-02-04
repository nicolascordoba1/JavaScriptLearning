let score = [10, 30, 20, 0, 70, 100, 20, 90]

for(let i = 0; i<score.length; i++){

if(score[i]===0){
    continue;
}

    console.log(`Your score is ${score[i]}`)

    if(score[i]===100){
        console.log('This is the maximum score');
        break;
    }
}
