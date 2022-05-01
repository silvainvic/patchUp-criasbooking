const room = require('../services/room');
const stt = require('../utils/status');

const getAll = async (_req, res, next) => {
  try {
    const data = await room.getAll();
    res.status(stt.STATUS_OK).send(data);
  } catch (e) {
      console.log(e.message);
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const data = await room.getById(req.params.id);
    res.status(stt.STATUS_OK).json(data);
  } catch (e) {
      console.log(e.message);
    next(e);
  }
}

const create = async (req, res, next) => {
  try {
    const data = await room.create(req.body);
    res.status(stt.STATUS_CREATED).json(data);
  } catch (e) {
      console.log(e.message);
    next(e);
  }
};

module.exports = { getAll, getById, create };