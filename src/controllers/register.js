const service = require('../services/register');

module.exports = async ({ body: { email, password } }, res, next) => {
  const { code, message, token } = await service({ email, password });

  if (message) return res.status(code).json({ message });

  return res.status(200).json({token});
}