
const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.send('Parimalla enduku parimalla intha deggara ayyav asala mental dana tikkal dana ');
});


const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});