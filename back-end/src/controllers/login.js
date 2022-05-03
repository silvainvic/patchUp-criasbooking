const { login } = require('../services/login');
const ip = require('../services/getIp');

module.exports.login = async (req, res, next) => {
  req.body.ip = ip.getIp(req);

  const { code, message, token } = await login({ ...req.body });
  if (token) res.status(code).json({ token });

  next({ code, message });
};
