const service = require('../services/register');
const stt = require('../utils/status');
const mess = require('../utils/message');

module.exports = async ({ body: { name, email, password } }, res, next) => {
  const { message, data } = await service({ name, email, password });

  if (!message) return res.status(stt.STATUS_CREATED).json(mess.USER_REGISTER_OK);

  res.status(stt.STATUS_CONFLICT).json({ message });

}