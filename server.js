// Import express module
const express = require('express');

// Create an express app
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Server is running successfully!');
});

// Set the port
const PORT = 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
