CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash CHAR(60) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
{
  "checklist": [
    {"task": "Create users table", "done": true},
    {"task": "Ensure usernames are unique", "done": true},
    {"task": "Ensure emails are unique", "done": true},
    {"task": "Store password securely as a hash", "done": true},
    {"task": "Include timestamps for record creation and updates", "done": true}
  ]
}