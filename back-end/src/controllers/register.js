const service = require('../services/register');
const { getIp } = require('../services/getIp');
const stt = require('../utils/status');
const mess = require('../utils/message');
const { createToken } = require('../services/manageToken');

module.exports = async (req, res, next) => {
  const { name, email, password } = req.body;
  const ip = getIp(req);
  const { message, data } = await service({ name, email, password });

  if (!message) {
    const token = createToken(data.email, data.password, ip);

    return res.status(stt.STATUS_CREATED).json({ message: mess.USER_REGISTER_OK, token}); //"Usuário cadastrado com sucesso!"
  }

  res.status(stt.STATUS_CONFLICT).json([message]); //"User already exists"

}