const register = require('../controllers/register');
const login = require('../controllers/login');
const consumeAPI = require('../controllers/consumeAPI');
const { isValidInputs, isValidRegister } = require('../middlewares/schema');

const route = require('express').Router();

// route.get('/reservations', (req, res) => {
//   return res.status(200).end();
// });

route.post('/login', login).post('/register', isValidRegister, register);
// .post('/reservations', isValidInputs, consumeAPI) // API fora do "ar"

module.exports = route;