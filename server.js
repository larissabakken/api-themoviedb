const express = require('express');
const cors = require('cors');
require('dotenv').config();
const api = require('./api');

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());
// app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/movies', async (req, res) => {
  try {
    const { data } = await api.get(`discover/movie?api_key=${process.env.API_KEY}&with_keywords=207317&sort_by=popularity.desc&include_adult=false&page=1`);
    // const christmasSpirit  = await api.get(`discover/movie?api_key=${process.env.API_KEY}&with_keywords=193048&without_keywords=207317&without_keywords=207317&sort_by=popularity.desc&include_adult=false&page=1`);
    res.send(data);
  } catch (error) {
    console.log(error, "error");
  }
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});