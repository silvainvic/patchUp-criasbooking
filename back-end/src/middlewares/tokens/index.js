const jwt = require('jsonwebtoken');

const config = require('./config');


module.exports.generate = (object) => jwt.sign(object, config.secret, config.options);