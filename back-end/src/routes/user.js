const route = require('express').Router();
const { Segments, celebrate, Joi } = require("celebrate");

const o = require('../middlewares/auth');
const controller = require('../controllers/user');
const schema = require('../middlewares/validations/schemas');

route.route('/me')
  .put(celebrate({
    [Segments.HEADERS]: {
      ...schema.headers,
      authorization: Joi.string().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().optional(),
      email: Joi.string().email().optional(),
    }
  }), o.auth, controller.update)
  .delete(celebrate({
    [Segments.HEADERS]: {
      ...schema.headers,
      authorization: Joi.string().required(),
    },
  }), o.auth, controller.delete);

route.route('/me/password').put(celebrate({
  [Segments.HEADERS]: {
    ...schema.headers,
    authorization: Joi.string().required(),
  },
  [Segments.BODY]: {
    password: Joi.string().required(),
    newPassword: Joi.string().required(),
  }
}), o.auth, controller.updatePassword)

module.exports = route;
