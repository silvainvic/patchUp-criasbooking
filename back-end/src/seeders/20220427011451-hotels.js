'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hotels',
    [
      {
        name: 'Hotel Ibis',
        stars: 2,
        state: 'Sao Paulo',
        city: 'Sao Paulo',
        district: 'none',
        address: 'none',
        userId: 1
      },
      {
        name: 'Hotel Castro',
        stars: 4,
        state: 'Sao Paulo',
        city: 'Caraguatatuba',
        district: 'none',
        address: 'none',
        userId: 1

      },
      {
        name: 'Marina Park Hotel',
        stars: 5,
        state: 'Rio Grande do Sul',
        city: 'Pelotas',
        district: 'none',
        address: 'none',
        userId: 2
      },
      {
        name: 'Natal Praia Hotel',
        stars: 4,
        state: 'Piaui',
        city: 'Teresina',
        district: 'none',
        address: 'none',
        userId: 3
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotels', null, {});
  }
};
