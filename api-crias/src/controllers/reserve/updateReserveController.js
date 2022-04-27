const { update } = require('../../services/reserve');

const updateReserveController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { client, room, days, reservationDate, totalPrice } = req.body;
    const updatedData = await update({ client, room, days, reservationDate, totalPrice, id });
    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  };
};

module.exports = updateReserveController;