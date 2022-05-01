const { Room } = require('../models');

const getAll = async () => {
  const rooms = await Room.findAll();
  return rooms;
};

const getById = async (id) => {
  const room = await Room.findByPk(id);
  if (!room) return { code: 404, message: 'Hotel does not exist' };
  return room;
}

const create = async ({ name, stars, state, city }) => {
  const room = await Room.create({ name, stars, state, city });
  return room;
};


module.exports = { getAll, getById, create };