const { User } = require('../../models');
const tokens = require('../../utils/tokens');

const isValid = (authorization) => {
  const { code, message, decoded } = tokens.decode(authorization);
  
  if (decoded) return { decoded };

  return { code, message: 'Invalid token' }
}

const isTkUser = async (decoded, authorization) => {
  const user = await User.findByPk(decoded.id);
  if (!user || (authorization !== user.token)) return { code: 401, message: 'Invalid token' };

  return { code: 200 };
}

const validations = async ({ authorization }) => {
  try {
    const valid = isValid(authorization);
    if (valid.message) return { code: valid.code, message: valid.message };
    
    const { code, message } = await isTkUser(valid.decoded, authorization);
    if (message) return { code, message };

    return { code };
  } catch (error) {
    console.error(error.message);
    return { code: 500, message: 'Erro interno do servidor' }
  }
}

module.exports.auth = async ({ headers: { authorization } }, _res, next) => {
  const { code, message } = await validations({ authorization });

  if (message) next({ code, message });

  next();
}