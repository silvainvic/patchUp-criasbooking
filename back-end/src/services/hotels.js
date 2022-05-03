const { User } = require('../models');
const { Hotel } = require('../models');

const tokens = require('../middlewares/tokens');

module.exports.getAll = async () => {
  try {
    const data = await Hotel.findAll({
      attributes: { exclude: ['userId'] },
      include: [{ model: User, as: 'user', attributes: { exclude: 'password' }}]
    });

    return { code: 200, data };

  } catch (error) {
    console.error(error.message);

    return { code: 500, message: 'Erro interno do servidor' };
  }
}

module.exports.getById = async ({ id }) => {
  try {
    const data = await Hotel.findByPk(id, {
      attributes: { exclude: ['userId'] },
      include: [{ model: User, as: 'user', attributes: { exclude: 'password' }}]
    });

    if (!data) return { code: 404, message: 'Hotel does not exist' };

    return { code: 200, data };
  } catch (error) {
    console.error(error.message);

    return { code: 500, message: 'Erro interno do servidor' };
  }
}

module.exports.create = async (inputs, { authorization }) => {
  try {

    const { code, message, decoded } = tokens.validate(authorization);

    if (!decoded) return { code, message };

    const data = await Hotel.create({ ...inputs, userId: decoded.id })

    return { code: 201, data };
  } catch (error) {
    console.error(error.message);

    return { code: 500, message: 'Erro interno do servidor' };
  }
}