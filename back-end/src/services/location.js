const { Address, City, Location, State } = require('../models');
const { UNAUTHORIZED, STATUS_CREATED } = require('../utils/status');
const tokens = require('../utils/tokens');

const getState = async (state) => {
  const data = await State.findOne({ where: { name: state } });

  console.log({ data });

  if (!data) {
    const created = await State.create({ name: state });
    return { idState: created.dataValues.id }
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
    if (decoded.level < 10)
      return { code: UNAUTHORIZED, message: 'Não autorizado' };

    const { idState } = await getState(address.state);
    console.log('ID STATE => ', idState);
    const { cityId } = await getCity(idState, address.city);

    const addressId = await setAddress(cityId, address);

    await Location.create({ ...location, addressId });

    return { code: STATUS_CREATED, message: 'Locação criada com sucesso' };
  } catch (error) {
    console.log(error.message);
    return { code: 500, message: error.message };
  }
};
