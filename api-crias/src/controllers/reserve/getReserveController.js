const { get } = require('../../services/reserve');

const getReserveController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const reserveData = await get(id);
    return res.status(200).json(reserveData);
  } catch (error) {
    next(error);
  };
};

module.exports = getReserveController;