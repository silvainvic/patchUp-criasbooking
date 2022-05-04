'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('groups', [
      { name: 'default', level: 0 },
      { name: 'gerente', level: 10 },
      { name: 'moderator', level: 90 },
      { name: 'administrator', level: 100 },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('groups', null, {});
  }
};
