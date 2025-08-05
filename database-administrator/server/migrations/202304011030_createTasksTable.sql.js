CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in_progress', 'completed') NOT NULL DEFAULT 'pending',
    priority INT DEFAULT 0,
    due_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
{
  "checklist": [
    {"task": "Create tasks table", "status": "pending"},
    {"task": "Define id column as primary key", "status": "pending"},
    {"task": "Define title column", "status": "pending"},
    {"task": "Define description column", "status": "pending"},
    {"task": "Define status column with default value", "status": "pending"},
    {"task": "Define priority column with default value", "status": "pending"},
    {"task": "Define due_date column", "status": "pending"},
    {"task": "Define created_at column with default value", "status": "pending"},
    {"task": "Define updated_at column with auto-update", "status": "pending"}
  ]
}