// const { parsed: { PORT } } = require('dotenv').config();

const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const { errors } = require('celebrate');
const { error } = require('./src/middlewares/handlers/error');
// const loginRoute = require('./src/routes/login');
// const registerRoute = require('./src/routes/register');
// const hotelsRoute = require('./src/routes/hotels');
const app = express();

app.use(cors());

// const corsOptions = {
//   origin: '',
//   optionsSuccessStatus: 200,
// };

app.use(express.json());

app.use(routes);

/* Middleware de erros do próprio do celebrate */
app.use(errors());

/* Middleware de erros próprio do aplicativo */
app.use(error);

// app
//   .use('/login', loginRoute)
//   .use('/register', registerRoute)
//   .use('/hotels', hotelsRoute);
//   // .use(route);

app.listen(
  process.env.BACK_END_PORT,
  () => console.log(`Example app listening on port ${process.env.BACK_END_PORT}!`),
);