const jwt = require('jsonwebtoken');

const config = require('./config');

module.exports.validate = (token) => {
  try {
    return { decoded: jwt.verify(token, config.secret) };
    
  } catch (error) {
    return { code: 401, message: 'Expired or invalid token' };
  }
}

module.exports.generate = (object) => jwt.sign(object, config.secret, config.options);
