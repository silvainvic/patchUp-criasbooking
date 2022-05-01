const hotels = require('../services/hotels');
const stt = require('../utils/status');

const getAll = async (_req, res, next) => {
  try {
    const data = await hotels.getAll();
    res.status(stt.STATUS_OK).send(data);
  } catch (e) {
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const data = await hotels.getById(req.params.id);
    res.status(stt.STATUS_OK).json(data);
  } catch (e) {
    next(e);
  }
}

const create = async (req, res, next) => {
  try {
    const data = await hotels.create(req.body);
    res.status(stt.STATUS_CREATED).json(data);
  } catch (e) {
    next(e);
  }
};

module.exports = { getAll, getById, create };