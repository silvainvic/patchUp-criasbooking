const { User } = require('../models');
const jwt = require('jsonwebtoken');
const res = require('express/lib/response');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = async ({ name, email, password }) => {
  try {
    const already = await User.findOne({ where: { email } });

    if (already) return { code: 409, message: 'User already exists' };
  
    const user = await User.create({ name, email, password });
    
    return { data: user.dataValues };
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
}
