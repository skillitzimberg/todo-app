const todoForm = document.getElementById("todo-form");
const todosList = document.getElementById("todos");

todoForm.addEventListener("submit", handleAddingNewTodo);

function handleAddingNewTodo(event) {
    event.preventDefault();
    const todoInput = document.getElementById("todo-input");
    const newTodo = todoInput.value;
    const todo = document.createElement("li");
    todo.innerHTML = `<span class="">${newTodo}</span> <span>Mark Complete</span>`;
    todosList.appendChild(todo);
    todoInput.value = "";
}
