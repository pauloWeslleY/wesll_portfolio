const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./data/db.json');
const portfolio = require('./data/portfolio.json');

app.use(cors());
app.listen('3333');

app.get('/', (req, res) => {
   return res.json(db);
})

app.get('/portfolio', (req, res) => {
   return res.json(portfolio);
})
