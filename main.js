const todosList = document.getElementById("todos");

let todoCollection = ["Water the yard", "Bless the child", "Mow the yard", ];

function buildTodoList(todos) {
    let todo;
    for(let i = 0; i < todos.length; i++) {
        todo = document.createElement("li");
        todo.innerText = `${todos[i]}`
        todosList.appendChild(todo);
    }
}

const addNewTodoButton = document.getElementById("add-todo");
addNewTodoButton.onclick = handleAddingNewTodo;
function handleAddingNewTodo() {
    const todoInput = document.getElementById("new-todo");
    const newTodo = todoInput.value;
    todoCollection.push(newTodo);
    const todo = document.createElement("li");
    todo.innerText = newTodo
    todosList.appendChild(todo);
}

buildTodoList(todoCollection);
