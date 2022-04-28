'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Hotels',
    [
      {
        name: 'Hotel Ibis',
        categoryStars: 2,
        cityId: 1,
      },
      {
        name: 'Hotel Castro',
        categoryStars: 4,
        cityId: 27,
      },
      {
        name: 'Marina Park Hotel',
        categoryStars: 5,
        cityId: 6,
      },
      {
        name: 'Natal Praia Hotel',
        categoryStars: 4,
        cityId: 20,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Hotels', null, {});
  }
};
