const express = require('express');
const router = express.Router();

// Import the controller that contains the logic for task operations
const taskController = require('./controllers/taskController');

// Route to get all tasks
router.get('/tasks', taskController.getAllTasks);

// Route to get a single task by id
router.get('/tasks/:id', taskController.getTaskById);

// Route to create a new task
router.post('/tasks', taskController.createTask);

// Route to update an existing task by id
router.put('/tasks/:id', taskController.updateTask);

// Route to delete a task by id
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
{
  "routesChecklist": [
    {
      "method": "GET",
      "path": "/tasks",
      "description": "Retrieve all tasks",
      "implemented": true
    },
    {
      "method": "GET",
      "path": "/tasks/:id",
      "description": "Retrieve a specific task by its ID",
      "implemented": true
    },
    {
      "method": "POST",
      "path": "/tasks",
      "description": "Create a new task",
      "implemented": true
    },
    {
      "method": "PUT",
      "path": "/tasks/:id",
      "description": "Update an existing task by its ID",
      "implemented": true
    },
    {
      "method": "DELETE",
      "path": "/tasks/:id",
      "description": "Delete a task by its ID",
      "implemented": true
    }
  ]
}