// const route = require('express').Router();
// const { celebrate, Segments, Joi } = require('celebrate');

// const controller = require('../controllers/hotels');
// const schemas = require('../middlewares/validations/schemas');

// route.route('/')
//   .get(controller.getAll)
//   .post(celebrate({
//     [Segments.HEADERS]: {
//       ...schemas.headers,
//       authorization: Joi.string().required(),
//     },
//     [Segments.BODY]: {
//       name: Joi.string().min(3).required(),
//       stars: Joi.number().required(),
//       state: Joi.string().min(3).required(),
//       city: Joi.string().min(3).required(),
//       district: Joi.string().min(3).required(),
//       address: Joi.string().min(3).required(),
//     }
//   }), controller.create);

// route.route('/:id')
//   .get(celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.number().positive().required(),
//     }
//   }), controller.getById);

// module.exports = route;