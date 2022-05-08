const service = require('../services/user');

module.exports.update = async ({ headers: { authorization }, body }, res, next) => {

  const { code, message, data } = await service.update({ authorization, payload: body });
  if (data) return res.status(code).json({ data });

  next({ code, message });
};

module.exports.updatePassword = async ({ headers: { authorization }, body }, res, next) => {

  const { code, message, data } = await service.updatePassword({ authorization, payload: body });
  if (data) return res.status(code).json({ data });

  next({ code, message });
};

module.exports.delete = async ({ headers: { authorization }}, res, next) => {

  const { code, message, data } = await service.delete({ authorization });
  if (data) return res.status(code).end();

  next({ code, message });
};