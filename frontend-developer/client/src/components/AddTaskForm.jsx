<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>To-Do List</title>
<style>
  #tasks {
    list-style-type: none;
  }
</style>
</head>
<body>

<h2>My To-Do List</h2>

<input type="text" id="newTask" placeholder="Add a new task...">
<button onclick="addTask()">Add Task</button>

<ul id="tasks">
</ul>

<script>
  // Array to hold tasks
  let tasks = [];

  function addTask() {
    // Get the task description from the input field
    const taskDescription = document.getElementById('newTask').value.trim();

    // If the task description is not empty, add it to the tasks array
    if (taskDescription) {
      tasks.push(taskDescription);

      // Update the UI
      const tasksList = document.getElementById('tasks');
      const newTaskItem = document.createElement('li');
      newTaskItem.textContent = taskDescription;
      tasksList.appendChild(newTaskItem);

      // Clear the input field
      document.getElementById('newTask').value = '';
    }
  }
</script>

</body>
</html>
{
  "checklist": [
    {"task": "Create HTML structure for the input field and button", "done": true},
    {"task": "Style the input field and button", "done": true},
    {"task": "Declare an array to store tasks", "done": true},
    {"task": "Implement the addTask function", "done": true},
    {"task": "Update the UI with the new task", "done": true},
    {"task": "Clear the input field after adding a task", "done": true}
  ]
}