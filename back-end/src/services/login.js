
const { User } = require('../models');

const tokens = require('../middlewares/tokens');

module.exports.login = async ({ email, password, ip }) => {
  try {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) return { code: 400, message: 'Invalid fields' };

    if (!ip) return { code: 400, message: 'Invalid ip' };

    const token = tokens.generate({ ip, name: user.name, email });

    return { code: 200, token };
  } catch (error) {
    console.error(error.message);
    return { code: 500, message: 'Erro interno do servidor' }
  }
 
}