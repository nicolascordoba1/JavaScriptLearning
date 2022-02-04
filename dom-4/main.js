const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('My content is copyright ')
})

const box = document.querySelector('.box');

box.addEventListener('mousemove', e => {
    // console.log(e.offsetX, e.offsetY)
    box.textContent = `the X position is ${e.offsetX} and the Y position is ${e.offsetY}`

});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})