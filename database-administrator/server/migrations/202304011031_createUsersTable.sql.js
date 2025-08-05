-- Migration for creating the initial 'users' table

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
{
  "checklist": [
    {
      "task": "Create users table",
      "done": true
    },
    {
      "task": "Add id column with auto-increment and primary key",
      "done": true
    },
    {
      "task": "Add username column with unique constraint",
      "done": true
    },
    {
      "task": "Add email column with unique constraint",
      "done": true
    },
    {
      "task": "Add password_hash column",
      "done": true
    },
    {
      "task": "Add created_at column with default current timestamp",
      "done": true
    },
    {
      "task": "Add updated_at column with default current timestamp and on update current timestamp",
      "done": true
    }
  ]
}