const { Joi } = require('celebrate');

module.exports.headers = {
  'content-type': Joi.string().optional(),
  'user-agent': Joi.string().optional(),
  accept: Joi.string().optional(),
  'accept-encoding': Joi.string().optional(),
  connection: Joi.string().optional(),
  host: Joi.string().optional(),
  'content-length': Joi.string().optional(),
};