const addTodoForm = document.getElementById("add-todo");
const todosList = document.getElementById("todos");

addTodoForm.addEventListener("submit", handleAddingNewTodo);

function handleAddingNewTodo(event) {
    event.preventDefault();
    const todoInput = document.getElementById("new-todo");
    const newTodo = todoInput.value;
    const todo = document.createElement("li");
    todo.innerText = newTodo;
    todosList.appendChild(todo);
    todoInput.value = "";
}
