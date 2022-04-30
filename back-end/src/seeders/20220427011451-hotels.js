'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hotels',
    [
      {
        name: 'Hotel Ibis',
        stars: 2,
        state: 'Sao Paulo',
        city: 'Sao Paulo'
      },
      {
        name: 'Hotel Castro',
        stars: 4,
        state: 'Sao Paulo',
        city: 'Caraguatatuba'
      },
      {
        name: 'Marina Park Hotel',
        stars: 5,
        state: 'Rio Grande do Sul',
        city: 'Pelotas'
      },
      {
        name: 'Natal Praia Hotel',
        stars: 4,
        state: 'Piaui',
        city: 'Teresina'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotels', null, {});
  }
};
