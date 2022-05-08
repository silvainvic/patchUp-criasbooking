const { Address, City, Location, State } = require('../models');
const { UNAUTHORIZED, STATUS_CREATED, STATUS_OK, INTERNAL_SERVER_ERROR } = require('../utils/status');
const tokens = require('../utils/tokens');

const getState = async (state) => {
  const data = await State.findOne({ where: { name: state } });

  if (!data) {
    const created = await State.create({ name: state });
    return { idState: created.dataValues.id };
  }

  return { idState: data.id };
};

const getCity = async (idState, city) => {
  const data = await City.findOne({ where: { name: city } });

  if (!data) {
    const created = await City.create({ name: city, stateId: idState });
    return { cityId: created.dataValues.id };
  }

  return { cityId: data.id };
};

const setAddress = async (cityId, address) => {
  const { id: addressId } = await Address.create({
    district: address.district,
    street: address.street,
    number: address.number,
    complement: address.complement,
    cep: address.cep,
    cityId: cityId,
  });
  return addressId;
};

module.exports.create = async ({ authorization, location, address }) => {
  try {
    const { code, message, decoded } = tokens.decode(authorization);

    if (!decoded) return { code, message };
    if (decoded.level < 10) return { code: UNAUTHORIZED, message: 'Not authorized' };

    const { idState } = await getState(address.state);
    const { cityId } = await getCity(idState, address.city);

    const addressId = await setAddress(cityId, address);

    await Location.create({ ...location, addressId });

    return { code: STATUS_CREATED, message: 'Location created successfully' };
  } catch (error) {
    console.log(error.message);
    return { code: INTERNAL_SERVER_ERROR, message: error.message };
  }
};

module.exports.remove = ({ authorization, id }) => {
  try {
    const { code, message, decoded } = tokens.decode(authorization);
    if (!decoded) return { code, message };
    const data = Location.destroy({ where: { id } });
    return { code: STATUS_OK, data };
  } catch (error) {
    console.error(error.message);
    return { code: INTERNAL_SERVER_ERROR, message: error.message };
  }
};
