const register = require('../controllers/register');
const { isValidInputs, isValidRegister } = require('../middlewares/schema');

const route = require('express').Router();

route.get('/reservations', (req, res) => {
  return res.status(200).end();
});

route.post('/reservations', isValidInputs, (req, res) => {
  return res.status(200).end();
});

route.post('/register', isValidRegister, register);

module.exports = route;