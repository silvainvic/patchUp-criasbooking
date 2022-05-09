const { Address, City, Location, State } = require('../models');
const { UNAUTHORIZED, STATUS_CREATED, STATUS_OK, INTERNAL_SERVER_ERROR } = require('../utils/status');
const tokens = require('../utils/tokens');

const setAddress = async (address) => {
  const [{ id: stateId}] = await State.findOrCreate({ where: { name: address.state } });
  const [{ id: cityId }] = await City.findOrCreate({ where: { name: address.city, stateId: stateId } }); 
  
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

  if (userId == decoded.id || decoded.level >= 100) return true;

  return false;
}

module.exports.create = async ({ authorization, location, address }) => {
  try {
    const { code, message } = verifyGrant(authorization);
    if (message) return { code, message };

    const { id: addressId } = await setAddress(address);
    
    const { decoded: { id: userId } } = tokens.decode(authorization);
    await Location.create({ ...location, addressId, userId, });

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
