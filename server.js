// Import express module
const express = require('express');

// Create an express app
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

// Start the server
app.listen(3000)

