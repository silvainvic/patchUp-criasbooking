const { Address, City, Location, State } = require('../models');
const { UNAUTHORIZED, STATUS_CREATED, STATUS_OK, INTERNAL_SERVER_ERROR } = require('../utils/status');
const tokens = require('../utils/tokens');

const setState = async (state) => {
  const data = await State.findOne({ where: { name: state } });

  if (!data) return { id } = State.create({ name: state });

  return { id: data.id };
}

const setCity = async (city, state) => {
  const data = await City.findOne({ where: { name: city } });

  if (!data) return { id } = City.create({ name: city, stateId: state });

  return { id: data.id };
}

const setAddress = async (address) => {
  const { id: stateId } = await setState(address.state);
  const { id: cityId } = await setCity(address.city, stateId);
  
  return { id } = Address.create({
    district: address.district,
    street: address.street,
    number: address.number,
    complement: address.complement,
    cep: address.cep,
    cityId: cityId,
  });
}

const verifyGrant = (authorization) => {
  const { code, message, decoded } = tokens.decode(authorization);

  if (!decoded) return { code, message };
  if (decoded.level < 10) return { code: UNAUTHORIZED, message: 'Not authorized' };

  return { code, message };
}

const verifyIsOwner = async (authorization, id) => {
  const { code, message, decoded } = tokens.decode(authorization);
  if (!decoded) return { code, message };

  const { userId } = await Location.findByPk(id);
  if ((decoded.id !== userId) || decoded.level < 100) return false;

  return true;
}

module.exports.create = async ({ authorization, location, address }) => {
  try {
    const { code, message } = verifyGrant(authorization);
    if (message) return { code, message };

    const { id: addressId } = await setAddress(address);

    await Location.create({ ...location, addressId });

    return { code: STATUS_CREATED, message: 'Location created successfully' };
  } catch (error) {
    console.log(error.message);
    return { code: INTERNAL_SERVER_ERROR, message: error.message };
  }
};

module.exports.remove = async ({ authorization, id }) => {
  try {
    const { code, message } = verifyGrant(authorization);
    if (message) return { code, message };

    const isOwn = await verifyIsOwner(authorization, id);
    if (!isOwn) return { code: UNAUTHORIZED, message: 'Not authorized remove' };

    const data = Location.destroy({ where: { id } });

    return { code: STATUS_OK, data };
  } catch (error) {
    console.error(error.message);
    return { code: INTERNAL_SERVER_ERROR, message: error.message };
  }
};
