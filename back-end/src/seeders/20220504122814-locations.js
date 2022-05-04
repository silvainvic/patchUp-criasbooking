'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('locations', [
      { name: 'Holtel silvestre', stars: 5, state: 'São Paulo', city: 'none', district: 'none', address: 'none', images: 'none', userId: 4, typeId: 3 },
      { name: 'Condominio Moda Praia', stars: 5, state: 'São Paulo', city: 'none', district: 'none', address: 'none', images: 'none', userId: 10, typeId: 2 },
      { name: 'Apartamento Moderna', stars: 5, state: 'São Paulo', city: 'none', district: 'none', address: 'none', images: 'none', userId: 10, typeId: 5 },
      { name: 'Casa inteligente', stars: 5, state: 'São Paulo', city: 'none', district: 'none', address: 'none', images: 'none', userId: 6, typeId: 4 },
      { name: 'Hostel', stars: 5, state: 'São Paulo', city: 'none', district: 'none', address: 'none', images: 'none', userId: 4, typeId: 1 },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('locations', null, {});
  }
};
