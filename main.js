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

buildTodoList(todoCollection);
