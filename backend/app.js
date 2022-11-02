const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.get('/status', (req, res) => {
  res.send({
    status: 'The Backend is running fine.',
  });
});


app.listen(3000, () => {
  console.log('Backend is running');
});
