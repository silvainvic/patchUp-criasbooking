const Joi = require('joi');

const reservationSchema = Joi.object({
  client: Joi.string().min(3).required(),
  room: Joi.string().required(),
  days: Joi.number().required(),
  reservationDateStart: Joi.date().required(),
  reservationDateEnd: Joi.date().required(),
  totalPrice: Joi.number().required(),
});

const userSchema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
})

const isValidInputs = (req, res, next) => {
  const { error } = reservationSchema.validate(req.body);

  if (error) return res.status(400).json(error.message);

  next();
};

const isValidRegister = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if(error) return res.status(400).json(error.message);

  next();
};

const isValidLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);

  if(error) return res.status(400).json(error.message);

  next();
};

module.exports = { isValidInputs, isValidRegister, isValidLogin };