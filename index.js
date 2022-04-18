const { parsed: { PORT } } = require('dotenv').config();

const express = require('express');
const route = require('./src/routes');
const app = express()

app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.json());

app.use(route);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))