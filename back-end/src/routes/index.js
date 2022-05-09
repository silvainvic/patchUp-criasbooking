const route = require('express').Router();

const login = require('./login');
const register = require('./register');
const user = require('./user');
const location = require('./location');

route.use('/login', login);
route.use('/register', register);

route.use('/user', user);
route.use('/user', location);

module.exports = route;
