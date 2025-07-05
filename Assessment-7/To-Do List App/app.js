document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            // Create new list item
            const li = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'deleteBtn';
            deleteBtn.addEventListener('click', function () {
                li.remove();
            });

            li.appendChild(taskSpan);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);

            taskInput.value = '';
        } else {
            alert('Please enter a task!');
        }
    }

    addBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});