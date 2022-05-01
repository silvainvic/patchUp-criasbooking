// const { parsed: { PORT } } = require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const route = require('./src/routes');
const loginRoute = require('./src/routes/login');
const registerRoute = require('./src/routes/register');
const hotelsRoute = require('./src/routes/hotels');
const roomRoute = require('./src/routes/room');
const app = express();

app.use(cors());

// const corsOptions = {
//   origin: '',
//   optionsSuccessStatus: 200,
// };

app
  .get('/', (req, res) => res.status(200).json({ test: 'test' }))
  .get('/test', (_req, res) => res.send('test'));

app
  .use(express.json());

app
  .use('/login', loginRoute)
  .use('/register', registerRoute)
  .use('/hotels', hotelsRoute)
  .use('/room', roomRoute);
  // .use(route);

app.listen(
  process.env.BACK_END_PORT,
  () => console.log(`Example app listening on port ${process.env.BACK_END_PORT}!`),
);