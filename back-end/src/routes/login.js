const { celebrate, Joi, Segments } = require('celebrate');

const route = require('express').Router();

const controller = require('../controllers/users');

route.route('/').post(
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    }
  }),
  controller.login
);

module.exports = route;
