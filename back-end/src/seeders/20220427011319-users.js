'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {  await queryInterface.bulkInsert('Users',
    [
      {
        name: 'Trybe01',
        email: 'trybe01@gmail.com',
        password: '123456',
      },
      {
        name: 'Trybe02',
        email: 'trybe02@gmail.com',
        password: '123456',
      },
      {
        name: 'Trybe03',
        email: 'trybe03@gmail.com',
        password: '123456',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
