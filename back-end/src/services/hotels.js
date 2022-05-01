const { Hotel } = require('../models');

const getAll = async () => {
  const hotels = await Hotel.findAll();
  return hotels;
};

const getById = async (id) => {
  const hotel = await Hotel.findByPk(id);
  if (!hotel) return { code: 404, message: 'Hotel does not exist' };
  return hotel;
}

const create = async ({ name, stars, state, city }) => {
  const hotel = await Hotel.create({ name, stars, state, city });
  return hotel;
};


module.exports = { getAll, getById, create };