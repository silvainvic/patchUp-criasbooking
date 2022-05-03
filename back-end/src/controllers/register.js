const service = require('../services/register');
const ip = require('../services/getIp');

module.exports.register = async (req, res, next) => {
  req.body.ip = ip.getIp(req);

  const { code, message, data } = await service.register({ ...req.body });

  if (data) return res.status(code).json({ token: data.token });

  next({ code, message });
}