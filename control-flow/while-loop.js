let i = 0;
const names = ['nicolas', 'raymond', 'andrea'];

while(i<5){
    console.log(`Estamos repitiendo ${i} veces este loop`)
    i++
}

i = 0
while(i < names.length){
    console.log(names[i])
    i++
}

// do while

i = 3;

do{
    console.log(`El valor de i es ${i}`)
    i++
} while(i<5);