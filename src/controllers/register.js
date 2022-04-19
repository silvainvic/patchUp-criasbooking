const service = require('../services/register');

module.exports = async ({ body: { name, email, password } }, res, next) => {
  const { code, message, data } = await service({ name, email, password });

  if (message) return res.status(code).json({ message });

  return res.status(200).json({ data });
}