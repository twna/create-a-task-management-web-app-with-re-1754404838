<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Task List Component</title>
<style>
  body {
    font-family: Arial, sans-serif;
  }
  .task-list {
    max-width: 400px;
    margin: 20px auto;
  }
  .task-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .task-item input[type="checkbox"] {
    margin-right: 10px;
  }
  .task-item.completed {
    text-decoration: line-through;
    color: #999;
  }
  .add-task {
    display: flex;
    margin-bottom: 20px;
  }
  .add-task input[type="text"] {
    flex-grow: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ddd;
  }
  .add-task button {
    padding: 10px;
    background-color: #5cb85c;
    color: white;
    border: none;
    cursor: pointer;
  }
  .add-task button:hover {
    background-color: #4cae4c;
  }
</style>
</head>
<body>

<div class="task-list" id="taskList">
  <div class="add-task">
    <input type="text" id="newTask" placeholder="Add a new task...">
    <button onclick="addTask()">Add Task</button>
  </div>
  <div id="tasks">
    <!-- Tasks will be added here dynamically -->
  </div>
</div>

<script>
  function addTask() {
    const tasksContainer = document.getElementById('tasks');
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        taskItem.classList.add('completed');
      } else {
        taskItem.classList.remove('completed');
      }
    });

    const textNode = document.createTextNode(taskText);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(textNode);
    tasksContainer.appendChild(taskItem);

    newTaskInput.value = ''; // Clear the input field
  }
</script>

</body>
</html>
{
  "checklist": [
    {"task": "Create HTML structure for the task list", "completed": true},
    {"task": "Style the task list with CSS", "completed": true},
    {"task": "Implement JavaScript function to add tasks", "completed": true},
    {"task": "Implement JavaScript to mark tasks as completed", "completed": true},
    {"task": "Ensure input field is cleared after adding a task", "completed": true}
  ]
}