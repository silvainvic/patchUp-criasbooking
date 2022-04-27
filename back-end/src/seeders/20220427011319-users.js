'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {  await queryInterface.bulkInsert('Users',
    [
      {
        name: 'Trybe01',
        email: 'trybe01@gmail.com',
        password: '123456',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        name: 'Trybe02',
        email: 'trybe02@gmail.com',
        password: '123456',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Trybe03',
        email: 'trybe03@gmail.com',
        password: '123456',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
