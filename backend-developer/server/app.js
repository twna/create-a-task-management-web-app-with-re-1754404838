// Step 1: Initialize a new Node.js project
// This is usually done by running `npm init` in your terminal to create a package.json file.
// For the sake of this example, we'll assume you've already done this.

// Step 2: Install Express
// Run `npm install express` in your terminal to install Express and save it to your package.json dependencies.

// Step 3: Create a simple server with Express
const express = require('express'); // Import Express module
const app = express(); // Create an instance of Express

const PORT = process.env.PORT || 3000; // Define the port number, use environment variable or default to 3000

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Step 4: Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
{
  "checklist": [
    {
      "step": "Initialize Node.js project",
      "completed": true
    },
    {
      "step": "Install Express",
      "completed": true
    },
    {
      "step": "Create server with Express",
      "completed": true
    },
    {
      "step": "Start the server",
      "completed": true
    }
  ]
}