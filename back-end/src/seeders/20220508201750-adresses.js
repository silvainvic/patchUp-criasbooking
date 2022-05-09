'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('adresses', [
      {
        district: 'Caraguatatuba',
        street: 'Rua Bartolomeu Bueno da Silva',
        number: '70',
        complement: 'Quiosque 14',
        cep: '11662300',
        cityId: 1
      },
      {
        district: 'Centro',
        street: 'Rua Lobo da Costa',
        number: '859',
        complement: null,
        cep: '96010150',
        cityId: '3'
      },
      {
        district: 'Vermelha',
        street: 'Avenida Barão de Gurguéia',
        number: '1424',
        complement: 'SALA 101',
        cep: '64018-290',
        cityId: '2'
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
