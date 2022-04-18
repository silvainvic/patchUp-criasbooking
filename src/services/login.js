
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    throw ({ code: 400, message: 'Invalid fields'});
  }

  const token = jwt.sign({ email, }, "teste", jwtConfig);

  return token;
};

module.exports = { login };