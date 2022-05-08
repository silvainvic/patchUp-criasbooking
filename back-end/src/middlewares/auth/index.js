const { User } = require('../../models');
const tokens = require('../../utils/tokens');

module.exports.auth = async ({ headers: { authorization } }, res, next) => {
  const { code, message } = await module.exports.auth({ authorization });

  if (message) next({ code, message });

  next();
}

module.exports.auth = async ({ authorization }) => {
  try {
    console.log({ authorization });
    if (authorization) {
      const { code, message, decoded } = tokens.decode(authorization);
      console.log({ decoded });
      return !decoded && { code, message: 'Invalid token' };
    }
    
    const data = await User.findOne({ where: { id: decoded.id } });

    if (!data || (authorization !== data.token)) return { code: 401, message: 'Invalid token' };
    const { code, message, decoded } = tokens.decode(data.token);
    if (!decoded) return { code, message: 'Invalid token' }

    return { code: 200 };
  } catch (error) {
    console.error(error.message);
    return { code: 500, message: 'Erro interno do servidor' }
  }
}