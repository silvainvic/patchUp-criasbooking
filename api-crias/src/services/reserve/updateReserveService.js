const { Reservation } = require('../../database/models');
const notFound = require('../../utils/notFound');

const updateReserveService = async ({ client, room, days, reservationDate, totalPrice, id }) => {

  const reservation = await Reservation.findOne({ where: { id } });

  if(!reservation) throw notFound('reservation not found');

  reservation.client = client;
  reservation.room = room;
  reservation.days = days;
  reservation.reservationDate = reservationDate;
  reservation.totalPrice = totalPrice;

  await reservation.save();
  
  return reservation;
};

module.exports = updateReserveService;
