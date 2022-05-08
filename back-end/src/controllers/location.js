const { create } = require('../services/location');

module.exports.create = async (req, res, next) => {
  const {
    headers: { authorization },
    body: { location, address },
  } = req;

  const { code, message, data } = await create({
    authorization,
    location,
    address,
  });
  if (data) return res.status(code).json({ message: message });
  next({ code, message });
};
