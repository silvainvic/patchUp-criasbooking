// const { User } = require('../models/index');
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = async ({ email, password }) => {
  // const already = await User.findOne({ where: { email } });
  // if (already) return { code: 409, message: 'User already exists' };
  //await User.create({ email, password });

  const token = jwt.sign({ email }, "criasbook", jwtConfig);

  return {data: {email, password, token} };
}