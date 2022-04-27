const { remove } = require('../../services/reserve');

const deleteReserveController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await remove(id);
    return res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports = deleteReserveController;