const { expect } = require('chai');
const sinon = require('sinon');
const createReserveService = require('../src/services/reserve/createReserveService');
const { Reservation } = require('../src/database/models');

const fakeReservation = { client: 'fulano', room: 'premium', days: 24, reservationDate: '11/23/2012', totalPrice: 11111 }
describe('Service', () => {
  before(() => {
    sinon.stub(Reservation, 'create').resolves('reserva')
  })
  it('POST success', async () => {
    const result = await createReserveService(fakeReservation);
    expect(result).to.be.equal('reserva');
  });
});