const { Reservation } = require('../../database/models');

const deleteReserveService = async (id) => {
  await Reservation.destroy({ where: { id }});
};

module.exports = deleteReserveService;