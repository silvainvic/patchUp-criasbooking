const route = require('express').Router();

const login = require('./login');
const register = require('./register');

route.use('/login', login);
route.use('/register', register);

module.exports = route;