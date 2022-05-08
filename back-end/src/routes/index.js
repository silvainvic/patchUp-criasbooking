const route = require('express').Router();

const login = require('./login');
const register = require('./register');
const user = require('./user');

route.use('/login', login);
route.use('/register', register);

route.use('/user', user)

module.exports = route;