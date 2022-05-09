'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('states', [
      { name: 'Sao Paulo' },
      { name: 'Piaui' },
      { name: 'Rio Grande do Sul' },
    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('states', null, {});
  }
};
