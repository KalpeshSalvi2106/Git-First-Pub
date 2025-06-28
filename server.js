// Importing required modules
const express = require('express');
const app = express();

// Define a port
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

// Example API endpoint
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received successfully!', receivedData: data });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
