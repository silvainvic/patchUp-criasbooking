const route = require('express').Router();
const { Segments, celebrate, Joi } = require('celebrate');

const schema = require('../middlewares/validations/schemas');
const controller = require('../controllers/location');

route.route('/location').post(
  celebrate({
    [Segments.HEADERS]: {
      ...schema.headers,
      authorization: Joi.string().required(),
    },
  }),
  controller.create
);

module.exports = route;
