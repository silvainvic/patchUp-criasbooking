'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locations', [
      { name: 'Hotel das rosas', stars: 5, type: 'hotel', addressId: 1, userId: 1 },
      { name: 'Hostel das maravilhas', stars: 2, type: 'hostei', addressId: 2, userId: 2 },
      { name: 'Pousada Mega Ra', stars: 4, type: 'Pousada', addressId: 3, userId: 1 },
      { name: 'Casa 2 Andares', stars: 2, type: 'Casa', addressId: 2, userId: 3 }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {});
  }
};
