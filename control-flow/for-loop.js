let firstName= "nicolas";
alert(firstName);

/* for (let i=0; i<5; i++){
    console.log(`Esta es la ${i+1} vez que se repite ese For Loop empieza a contar en ${i}`)
}

console.log('Loop finalizado') */

const names = ['nicolas', 'santiago', 'marta'];

for(i=0; i<names.length; i++){
   // console.log(names[i])
   let html = `<div>${names[i]} </div>`;
   console.log(html);
}