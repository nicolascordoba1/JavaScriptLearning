const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'Youtube';

const mssg = document.querySelector('.error')

console.log(mssg.getAttribute('class'));

mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color:green')
mssg.innerText = 'Este es un mensajes de éxito';