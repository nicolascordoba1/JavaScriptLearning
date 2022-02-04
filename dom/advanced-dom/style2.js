/* const content = document.querySelector('p');

console.log(content.classList);

content.classList.add('success')
content.classList.remove('success') */

const content = document.querySelectorAll('p');
console.log(content);

content.forEach(p =>{
    if(p.textContent.includes('success')){
        p.classList.add('success');
    }
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
})

const title = document.querySelector('.title');

title.classList.toggle('test');