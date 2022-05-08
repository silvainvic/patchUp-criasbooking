const service = require('../services/user');

module.exports.update = async ({ headers: { authorization }, body }, res, next) => {

  const { code, message, data } = await service.update({ authorization, payload: body });
  if (data) return res.status(code).json({ data });

  next({ code, message });
};