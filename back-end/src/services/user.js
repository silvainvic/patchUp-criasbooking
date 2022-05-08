const { User } = require('../models');
const tokens = require('../utils/tokens');

module.exports.update = async ({ authorization, payload }) => {
  try {
    const { code, message, decoded } = tokens.decode(authorization);
    if (!decoded) return { code, message };

    const user = await User.findByPk(decoded.id);
    const { id, name, email } = await user.update(payload);
    
    const token = tokens.generate({ ip: decoded.ip, id, name, email, level: decoded.level });
    await user.update({ token });

    return  { code: 200, data: 'updated success' }
  } catch (error) {
      console.error(error.message);
      return { code: 500, message: 'Erro interno do servidor' };
  }
}

module.exports.delete = async ({ authorization }) => {
  try {
    const { code, message, decoded } = tokens.decode(authorization);
    if (!decoded) return { code, message };

    const data = User.destroy({ where: { id: decoded.id } });

    return  { code: 200, data }
  } catch (error) {
      console.error(error.message);
      return { code: 500, message: 'Erro interno do servidor' };
  }
}

module.exports.updatePassword = async ({ authorization, payload }) => {}