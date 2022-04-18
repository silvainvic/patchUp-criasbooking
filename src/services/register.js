const { User } = require('../models');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = async ({ email, password }) => {
  const email = await User.findOne({ where: { email } });

  if (email) return { code: 409, message: 'User already exists' };

  await User.create({ email, password });

  const token = jwt.sign({ email }, "criasbook", jwtConfig);

  return { token  };
}