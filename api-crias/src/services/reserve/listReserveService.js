const { Reservation } = require('../../database/models');

const listReseveService = async () => {
  const reservationList = await Reservation.findAll();
  return reservationList;
};
 
module.exports = listReseveService; 