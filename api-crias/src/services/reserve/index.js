const create = require('./createReserveService.js');
const remove = require('./deleteReserveService.js');
const get = require('./getReserveService.js');
const list = require('./listReserveService.js');
const update = require('./updateReserveService.js');

module.exports = {
  create,
  remove,
  get,
  list,
  update
};
