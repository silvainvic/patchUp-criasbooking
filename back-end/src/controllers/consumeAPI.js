const consume = require('../services/consumeAPI');

module.exports = async (req, res, next) => {
  
  const { code, message, data } = await consume(req.body);

  if (message) return res.status(code).json({ message });

  return res.status(200).json({ data });
}