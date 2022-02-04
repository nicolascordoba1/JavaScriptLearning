const names = ['mario', 'alba', 'nicolas', 'santiago'];

names.sort()
console.log(names);

const scores = [40, 10, 30, 27, 77, 55, 3]

/* const scores = [
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
 */
scores.sort((a,b)=>{
    if(a.score > b.score){
        return 1;
    } else if(b.score > a.score){
        return -1;
    } else{
        return 0;
    }
})

scores.sort((a,b) => a.score-b.score)

console.log(scores)