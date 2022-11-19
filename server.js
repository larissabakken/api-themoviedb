const express = require('express');
require('dotenv').config();
const api = require('./api');

const app = express();
const port = 5050;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/movies', async (req, res) => {
  try {
    const { data } = await api.get(`popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});