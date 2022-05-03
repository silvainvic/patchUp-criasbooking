const service = require('../services/hotels');

module.exports.getAll = async (_req, res, next) => {
  const { code, message, data } = await service.getAll();

  if (data) return res.status(code).json(data);

  next({ code, message });
}

module.exports.getById = async ({ params: { id }}, res, next) => {
  const { code, message, data } = await service.getById({ id });

  if (data) return res.status(code).json(data);

  next({ code, message });
}

module.exports.create = async ({ body, headers }, res, next) => {
  const { code, message, data } = await service.create({ ...body }, {...headers});

  if (data) return res.status(code).end();

  next({ code, message });
}