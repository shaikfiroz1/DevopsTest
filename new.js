const express = require('express');

const app = express();
const PORT = 8080;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Parimalla enduku parimalla intha deggara ayyav asala mental dana tikkal dana');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
