const { Reservation } = require('../../database/models');

const createReserveService = async ({ client, room, days, reservationDate, totalPrice }) => {
    const reservation = await Reservation.create({ client, room, days, reservationDate, totalPrice });
    return reservation;
};

module.exports = createReserveService;