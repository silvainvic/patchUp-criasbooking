const route = require('express').Router();
const { Segments, celebrate, Joi } = require('celebrate');

const authenticated = require('../middlewares/auth');
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

route.route('/location/:id').delete(
  celebrate({
    [Segments.HEADERS]: {
      ...schema.headers,
      authorization: Joi.string().required(),
    },
  }),
  authenticated.auth,
  controller.remove
);

module.exports = route;
