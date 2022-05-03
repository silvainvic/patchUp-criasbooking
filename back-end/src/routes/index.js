const route = require('express').Router();

const login = require('./login');

route.use('/login', login);


module.exports = route;