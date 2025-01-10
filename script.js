document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            const tickButton = document.createElement('button');
            tickButton.textContent = '✔';
            tickButton.className = 'tick-button';
            tickButton.addEventListener('click', () => {
                listItem.classList.toggle('completed');
            });

            listItem.appendChild(tickButton);
            taskList.appendChild(listItem);
            newTaskInput.value = '';
        }
    });

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});