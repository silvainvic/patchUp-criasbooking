const route = require('express').Router();

const login = require('./login');
const register = require('./register');

const hotels = require('./hotels');

route.use('/login', login);
route.use('/register', register);

route.use('/hotels', hotels);

module.exports = route;