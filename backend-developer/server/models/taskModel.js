CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    PasswordHash VARCHAR(255) NOT NULL,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Tasks (
    TaskID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    Title VARCHAR(255) NOT NULL,
    Description TEXT,
    Priority ENUM('Low', 'Medium', 'High') DEFAULT 'Low',
    Status ENUM('Pending', 'In Progress', 'Completed', 'Archived') DEFAULT 'Pending',
    DueDate DATE,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
{
  "database_schema": [
    {
      "table": "Users",
      "columns": [
        {"name": "UserID", "type": "INT", "constraints": ["PRIMARY KEY", "AUTO_INCREMENT"]},
        {"name": "Username", "type": "VARCHAR(255)", "constraints": ["NOT NULL"]},
        {"name": "Email", "type": "VARCHAR(255)", "constraints": ["NOT NULL", "UNIQUE"]},
        {"name": "PasswordHash", "type": "VARCHAR(255)", "constraints": ["NOT NULL"]},
        {"name": "CreatedAt", "type": "TIMESTAMP", "default": "CURRENT_TIMESTAMP"}
      ]
    },
    {
      "table": "Tasks",
      "columns": [
        {"name": "TaskID", "type": "INT", "constraints": ["PRIMARY KEY", "AUTO_INCREMENT"]},
        {"name": "UserID", "type": "INT", "constraints": ["FOREIGN KEY"]},
        {"name": "Title", "type": "VARCHAR(255)", "constraints": ["NOT NULL"]},
        {"name": "Description", "type": "TEXT", "constraints": []},
        {"name": "Priority", "type": "ENUM('Low', 'Medium', 'High')", "default": "'Low'"},
        {"name": "Status", "type": "ENUM('Pending', 'In Progress', 'Completed', 'Archived')", "default": "'Pending'"},
        {"name": "DueDate", "type": "DATE", "constraints": []},
        {"name": "CreatedAt", "type": "TIMESTAMP", "default": "CURRENT_TIMESTAMP"},
        {"name": "UpdatedAt", "type": "TIMESTAMP", "default": "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"}
      ]
    }
  ]
}