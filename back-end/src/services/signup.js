const { User, Group } = require('../models');
const tokens = require('../utils/tokens');

module.exports.register = async ({ name, email, password, ip }) => {
  try {
    const already = await User.findOne({ where: { email } });

    if (already) return { code: 409, message: 'User already exists' };
  
    const data = await User.create({ name, email, password, token: 'invalid' });
    const token = tokens.generate({ ip, id: data.id, name, email, level: 0 });
    
    data.update({ token, where: { id: data.id } });

    return { code: 201, token };
  } catch (error) {
    console.error(error.message);
    return { code: 500, message: 'Erro interno do servidor' }
  }
}