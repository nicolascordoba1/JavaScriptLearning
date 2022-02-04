const ul = document.querySelector('.lista')

let people = ['nicolas', 'raymond', 'andrea'];

let html = ``;

people.forEach(function(person){
    html += `<li>${person}</li>`;
})

ul.innerHTML = html;
