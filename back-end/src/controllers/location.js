const { create, remove } = require('../services/location');

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

module.exports.remove = async (req, res, next) => {
  const { authorization } = req.headers;
  const { id } = req.params;

  const { code, message, data } = await remove({ authorization, id });
  if (data) return res.status(code).end();

  next({ code, message });
};
