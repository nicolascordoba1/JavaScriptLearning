const para = document.querySelector('p');

/* para.innerText += ' Esto es una prueba de JavaScript';

console.log(para.innerText) */

/* const paras = document.querySelectorAll('p');

paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += 'NUEVO TEXTO';
}) */

const content = document.querySelector('.content');

/* console.log(content.innerHTML);

content.innerHTML += '<h2> This is a new TEXT </h2>' */

const people = ['nicolas', 'raymond', 'andrea'];

people.forEach(person => {
    content.innerHTML += `<p>${person} is awesome</p>`;
})