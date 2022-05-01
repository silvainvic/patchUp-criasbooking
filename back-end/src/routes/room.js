const roomRoute = require('express').Router();
const room = require('../controllers/room');

roomRoute
  .get('/', room.getAll)
  .get('/:id', room.getById)
  .post('/', room.create);

module.exports = roomRoute;