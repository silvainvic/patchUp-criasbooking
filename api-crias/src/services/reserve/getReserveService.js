const { Reservation } = require('../../database/models');
const notFound = require('../../utils/notFound');

const getReserveService = async (id) => {
  const reservation = await Reservation.findOne({ where: { id } });

  if(!reservation) throw notFound('reservation not found');

  return reservation;
};

module.exports = getReserveService;