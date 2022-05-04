const service = require('../services/users');
const ip = require('../services/getIp');

module.exports.login = async (req, res, next) => {
  req.body.ip = ip.getIp(req);

  const { code, message, token } = await service.login({ ...req.body });
  if (token) return res.status(code).json({ token });

  next({ code, message });
};

module.exports.register = async (req, res, next) => {
  req.body.ip = ip.getIp(req);

  const { code, message, token } = await service.register({ ...req.body });
  if (token) return res.status(code).json({ token });

  next({ code, message });
}
