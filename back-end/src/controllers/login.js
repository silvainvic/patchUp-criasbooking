const { login } = require('../services/login');

module.exports  = async (req, res, next) => {
  try {
    const { token } = await login(req.body);
    res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};
