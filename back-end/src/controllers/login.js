const { login } = require('../services/login');
const { getIp } = require('../services/getIp');

module.exports  = async (req, res, next) => {
  try {
    const ip = getIp(req);
    const { token } = await login(req.body, ip);
    res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};
