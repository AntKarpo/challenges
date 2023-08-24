console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    const headline =event.target.elements.headline.value
    const task = event.target.elements.task.value
    addTodolist(headline , task);
    console.log(headline);
    console.log(task);
    event.target.reset();
    event.target.headline.focus();
});

function addTodolist(headline, task) {

const list = document.createElement('li');
const h2 = document.createElement('h2');
const p = document.createElement('p');

h2.textContent = headline;
p.textContent = task;

    list.appendChild(h2);
    list.appendChild(p);
    todoList.appendChild(list);
}

