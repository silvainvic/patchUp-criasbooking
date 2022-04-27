const { expect } = require('chai');
const sinon = require('sinon');
const createReserveController = require('../src/controllers/reserve/createReserveController');
const reserveService = require('../src/services/reserve');

const fakeReservationBody = { client: 'fulano', room: 'premium', days: 24, reservationDate: '11/23/2012', totalPrice: 11111 };

const fakeServiceReturn = { id: 1, ...fakeReservationBody }
describe('Service', () => {
  const req = {
    body: fakeReservationBody
  };

  const res = {};
  res.status = sinon.stub().returns(res);
  res.json = sinon.spy();

  const next = sinon.spy();
  describe('sucesso', () => {

    before(() => {
      sinon.stub(reserveService, 'create').resolves
        (fakeServiceReturn)
    })

    after(() => {
      reserveService.create.restore()
    })
    it('POST res.status calledWith 201', async () => {
      await createReserveController(req, res, next);
      expect(res.status.calledWith(201)).to.be.true;
    });

    it('POST res.json calledWith retorno do service', async () => {
      await createReserveController(req, res, next);
      expect(res.json.calledWith(fakeServiceReturn)).to.be.true;
    });
  })
  describe('falha', () => {
    const fakeError = Error('error')
    before(() => {
      sinon.stub(reserveService, 'create').rejects(fakeError)
    })
    after(() => {
      reserveService.create.restore()
    })
    it('POST next calledWith error', async () => {
      await createReserveController(req, res, next);
      expect(next.calledWith(fakeError)).to.be.true;
    });

  })

});