const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", handleAddingNewTodo);

const todosList = document.getElementById("todos");
todosList.addEventListener("click", handleMarkComplete);
todosList.addEventListener("click", handleDelete);


function handleAddingNewTodo(event) {
    event.preventDefault();
    const todoInput = document.getElementById("todo-input");
    const newTodo = todoInput.value;
    const todo = document.createElement("li");
    todo.innerHTML = `<span class="todo">${newTodo}</span> <span class="toggle">COMPLETE</span> <span class="toggle delete hidden">DELETE</span>`;
    todosList.appendChild(todo);
    todoInput.value = "";
}

function handleMarkComplete(event) {
    console.log(event.target);
    event.target.parentElement.firstChild.classList.toggle("complete");
    event.target.parentElement.lastChild.classList.toggle("hidden"); 
}

function handleDelete(event) {
    if(event.target.firstChild.data === "DELETE") {
        let todo = event.target.parentNode;
        todo.remove();
    }; 
}
