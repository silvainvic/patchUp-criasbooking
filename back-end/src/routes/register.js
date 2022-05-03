const { celebrate, Joi, Segments } = require('celebrate');

const route = require('express').Router();

const controller = require('../controllers/register');

route.route('/').post(
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().min(3).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    }
  }),
  controller.register
);

module.exports = route;