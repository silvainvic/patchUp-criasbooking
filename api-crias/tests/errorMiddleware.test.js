const { expect } = require('chai');
const sinon = require('sinon');
const errorHandler = require('../src/middlewares/errorHandler');


describe('Middleware Error', () => {
  const req = 'dummy'
  const res = {};
  res.status = sinon.stub().returns(res);
  res.json = sinon.spy();
  const next = 'dummy';

  describe('com status', () => {
    it('res.status calledWith err.status', async () => {
      const err = { status: 1,  message: 2 }
      await errorHandler(err, req, res, next);
      expect(res.status.calledWith(1)).to.be.true;
      expect(res.json.calledWith({ message: 2 })).to.be.true;
    });

    it('res.status calledWith err.status', async () => {
      const err = "dummy"
      await errorHandler(err, req, res, next);
      expect(res.status.calledWith(500)).to.be.true;
      expect(res.json.calledWith({ message: 'server error' })).to.be.true;
    });

  })

});