
const { User } = require('../models');
const { createToken } = require('./manageToken');

const login = async ({ email, password }, ip) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) {
    throw ({ code: 400, message: 'Invalid fields'});
  }
  if (!ip) {
    throw ({ code: 400, message: 'Not ip'});
  }
  
  const token = createToken(email, password, ip);

  return { token };
};

module.exports = { login };