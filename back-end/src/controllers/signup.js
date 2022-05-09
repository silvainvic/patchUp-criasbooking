const service = require('../services/signup');
const ip = require('../utils/getIp');

module.exports.register = async (req, res, next) => {
  req.body.ip = ip.getIp(req);

  const { code, message, token } = await service.register({ ...req.body });
  if (token) return res.status(code).json({ token });

  next({ code, message });
}