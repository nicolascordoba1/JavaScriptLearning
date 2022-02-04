const scores = [
    {player: 'mario', score:30},
    {player: 'luigi', score:30},
    {player: 'yoshi', score:30},
    {player: 'mario', score:50},
    {player: 'luigi', score:30},
    {player: 'yoshi', score:30},
    {player: 'mario', score:100},
    {player: 'luigi', score:30},
    {player: 'yoshi', score:30},
]

const scoreCount = scores.reduce((acc, curr) =>{
    if(curr.player === 'mario'){
        acc+= curr.score
    }
    return acc;
}, 0)

console.log(scoreCount);