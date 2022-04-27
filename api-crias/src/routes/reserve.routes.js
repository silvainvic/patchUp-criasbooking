const reserveRoutes = require('express').Router();
const reserve = require('../controllers/reserve');
const { celebrate, Joi, Segments } = require('celebrate');

reserveRoutes
  .route('/')
  .get(reserve.list)
  .post(
    celebrate({
      [Segments.BODY]: {
        client: Joi.string().min(3).required(),
        room: Joi.string().required(),
        days: Joi.string().required(),
        reservationDate: Joi.string().required(),
        totalPrice: Joi.number().required(),
      },
    }),
    reserve.create
  );

reserveRoutes.route('/:id').get(reserve.get).put(reserve.update).delete(reserve.remove);

module.exports = reserveRoutes;
