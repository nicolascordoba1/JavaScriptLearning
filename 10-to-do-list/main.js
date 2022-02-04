const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const generateTemplate = (todo) => {

    const html = `  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`

    list.innerHTML += html;

}

addForm.addEventListener('submit', e =>{

    e.preventDefault();
    const toDo = addForm.add.value.trim();

    if(toDo.length){
        generateTemplate(toDo);
        addForm.reset();
    }

});

//delete todos

list.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterTodos = (term) =>{

    Array.from(list.children)
        .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
        .filter((todo)=> todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));

};

//Keyup event
//Si hay match la idea sería no hacer nada, si no hay match deberian desaparecer las tareas
search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

})