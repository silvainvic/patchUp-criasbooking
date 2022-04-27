const reserveService = require('../../services/reserve');

const createReserveController = async (req, res, next) => {
  console.log(req.body)
  try {
      const { client, room, days, reservationDate, totalPrice } = req.body;
      const reservation = await reserveService.create({ client, room, days, reservationDate, totalPrice });
      return res.status(201).json(reservation);
  } catch (error) {
    next(error);
  }
};

/* const res = {
  status: () => (
     { json: () => 'oque eu quero' } 
    )  
}
res.status().json()

const res2 = {
  status: ()  => res2,
  json: () => 'oque eu quero'   
}
 */

module.exports = createReserveController;