import React from 'react';

const TaskItem = ({ task, onToggle }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span className={task.completed ? 'completed' : ''}>{task.title}</span>
    </div>
  );
};

export default TaskItem;
{
  "checklist": [
    {
      "id": 1,
      "title": "Create TaskItem component",
      "completed": true
    },
    {
      "id": 2,
      "title": "Display task title",
      "completed": true
    },
    {
      "id": 3,
      "title": "Implement completion toggle",
      "completed": true
    },
    {
      "id": 4,
      "title": "Style completed tasks",
      "completed": false
    }
  ]
}