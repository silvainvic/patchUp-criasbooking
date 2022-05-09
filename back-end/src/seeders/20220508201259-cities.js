'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cities', [
      { name: 'Caraguatatuba', stateId: 1 },
      { name: 'Teresina', stateId: 2 },
      { name: 'Pelotas', stateId: 3 },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cities', null, {});
  }
};
