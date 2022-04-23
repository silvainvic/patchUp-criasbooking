const service = require('../services/register');

module.exports = async ({ body: { name, email, password } }, res, next) => {
  // const { code, message, data } = await service({ name, email, password });
  const { code, message } = await service({ name, email, password });

  if (message) return res.status(code).json({ message });

  next();
}