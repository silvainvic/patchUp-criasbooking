
const { User } = require('../models');

const tokens = require('../middlewares/tokens');

module.exports.login = async ({ email, password, ip }) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) return { code: 400, message: 'Invalid fields' };

  if (!ip) return { code: 400, message: 'Invalid ip' };

  const token = tokens.generate({ ip, name: user.name, email, password });

  return { code: 200, token };
}