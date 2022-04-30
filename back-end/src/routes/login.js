const login = require('../controllers/login');

const loginRoute = require('express').Router();

loginRoute.post('/', login);

module.exports = loginRoute;
