# A simple in-memory storage for tasks
tasks = {}
task_id_counter = 1

# Create a new task
def create_task(title, description):
    global task_id_counter
    task_id = task_id_counter
    tasks[task_id] = {
        'title': title,
        'description': description
    }
    task_id_counter += 1
    return task_id

# Read a task by ID
def read_task(task_id):
    return tasks.get(task_id)

# Update an existing task
def update_task(task_id, title=None, description=None):
    if task_id in tasks:
        if title is not None:
            tasks[task_id]['title'] = title
        if description is not None:
            tasks[task_id]['description'] = description
        return True
    else:
        return False

# Delete a task by ID
def delete_task(task_id):
    if task_id in tasks:
        del tasks[task_id]
        return True
    else:
        return False
{
  "CRUD_Checklist": {
    "Create": "Implemented",
    "Read": "Implemented",
    "Update": "Implemented",
    "Delete": "Implemented"
  }
}