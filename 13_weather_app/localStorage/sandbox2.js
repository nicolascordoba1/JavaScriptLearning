const todos = [
    {text: 'play mariokart', author: 'nico'},
    {text: 'be amazing', author: 'andre'},
    {text: 'be awesome', author: 'raymond'}
];

localStorage.setItem('todos', JSON.stringify(todos));

const stored = localStorage.getItem('todos');

console.log(stored);

console.log(JSON.parse(stored));