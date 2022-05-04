'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('types', [
      { name: 'hostel' },
      { name: 'condominio' },
      { name: 'hotel' },
      { name: 'casa' },
      { name: 'apartamento' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('types', null, {});
  }
};
