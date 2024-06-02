function addTask() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const task = todoInput.value.trim();

    if (task !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${task} <button onclick="removeTask(this)">x</button>`;
        todoList.appendChild(listItem);
        todoInput.value = '';
        todoInput.focus();
    }
}

function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}