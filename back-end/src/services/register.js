const { User } = require('../models');

const tokens = require('../middlewares/tokens');

module.exports.register = async ({ name, email, password, ip }) => {
  try {
    const already = await User.findOne({ where: { email } });

    if (already) return { code: 409, message: 'User already exists' };
  
    const data = await User.create({ name, email, password });
    data.token = tokens.generate({ ip, name, email });
    
    return { code: 201, data };
  } catch (error) {
    console.error(error.message);
    return { code: 500, message: 'Erro interno do servidor' }
  }
}
