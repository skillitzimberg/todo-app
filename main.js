document.getElementById("todo-form")
    .addEventListener("submit", displayTodo);

document.getElementById("todos")
    .addEventListener("click", toggleComplete);

document.getElementById("todos")
    .addEventListener("click", deleteTodo);

function displayTodo(e) {
    e.preventDefault();

    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value;
    const todoListItem = document.createElement("li");
    const todoSpan = createCustomSpan("todo", todoText);
    const completeButton = createCustomSpan("toggle", "COMPLETE");
    const deleteButton = createCustomSpan("toggle delete hidden", "DELETE");

    todoListItem.append(todoSpan);
    todoListItem.append(completeButton);
    todoListItem.append(deleteButton);
    document.getElementById("todos").append(todoListItem);

    todoInput.value = "";
}

function createCustomSpan(className = "", text = "") {
    const spanElem = document.createElement("span");
    spanElem.className = className;
    spanElem.textContent = text;
    return spanElem;
}

function toggleComplete(e) {
    e.target.parentElement.firstChild.classList.toggle("complete");
    e.target.parentElement.lastChild.classList.toggle("hidden"); 
}

function deleteTodo(e) {
    if (e.target.firstChild.data === "DELETE") {
        e.target.parentNode.remove();
    }; 
}