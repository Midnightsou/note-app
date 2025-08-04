document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const messageBox = document.getElementById('message-box');

    function showMessage(message, duration = 2000) {
        messageBox.textContent = message;
        messageBox.style.display = 'block';
        setTimeout(() => {
            messageBox.style.display = 'none';
        }, duration);
    }

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') {
            showMessage('Please enter a task.');
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const tickButton = document.createElement('button');
        tickButton.textContent = '✔';
        tickButton.className = 'tick-button';
        tickButton.title = 'Mark as completed';
        tickButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
            showMessage(
                listItem.classList.contains('completed')
                    ? 'Task marked as completed!'
                    : 'Task marked as active.'
            );
        });

        listItem.appendChild(tickButton);
        taskList.appendChild(listItem);
        newTaskInput.value = '';
        showMessage('Task added!');
    }

    addTaskButton.addEventListener('click', addTask);

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});