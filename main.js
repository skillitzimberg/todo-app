const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", handleAddingNewTodo);

const todosList = document.getElementById("todos");
todosList.addEventListener("click", handleMarkComplete);


function handleAddingNewTodo(event) {
    event.preventDefault();
    const todoInput = document.getElementById("todo-input");
    const newTodo = todoInput.value;
    const todo = document.createElement("li");
    todo.innerHTML = `<span class="">${newTodo}</span> <span>Mark Complete</span>`;
    todosList.appendChild(todo);
    todoInput.value = "";
}

function handleMarkComplete(event) {
    console.log(event.target);
    event.target.parentElement.firstChild.className = "complete";
}
