const button = document.querySelector('button');

const items = document.querySelectorAll('li');

//Remove items clicking in each iteam
// items.forEach(item => {
//     item.addEventListener('click', e =>{
//         e.target.remove();
//     })
// })

//Remove li items with the button

// button.addEventListener('click', () => {
//     const li = document.querySelector('li')
//     li.remove();
// })



const ul = document.querySelector('ul');

ul.addEventListener('click', e => {
    
        e.target.remove();
    
})

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'Nuevo texto';
    ul.append(li);
})