const { User, Group } = require('../models');
const tokens = require('../utils/tokens');

module.exports.login = async ({ email, password, ip }) => {
  try {
    const user = await User.findOne({
      where: { email },
      include: [{ model: Group, as: 'group', attributes: { exclude: ['id', 'name']} }],
      attributes: { exclude: 'groupId' },
    });

    if (!user || user.password !== password) return { code: 400, message: 'Invalid fields' };
    if (!ip) return { code: 400, message: 'Invalid ip' };

    const token = tokens.generate({ ip, id: user.id, name: user.name, email, level: user.group.level });
    await user.update({ where: { id: user.id }, token });

    return { code: 200, token };
  } catch (error) {
    console.error(error.message);
    return { code: 500, message: 'Erro interno do servidor' }
  }
}

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
