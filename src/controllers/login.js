const { login } = require('../services/login');

const findUser = async (req, res, next) => {
  try {
    const data = await login(req.body);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
};

module.exports = { findUser };