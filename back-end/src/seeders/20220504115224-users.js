'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      { name: 'Savio', email: 'savio@trybe.com', password: '12345678', token: 'invalid', groupId: '1' },
      { name: 'Aryherton', email: 'aryherton@trybe.com', password: '12345678', token: 'invalid', groupId: '4' },
      { name: 'Renata', email: 'renata@trybe.com', password: '12345678', token: 'invalid', groupId: '3' },
      { name: 'Grazziano', email: 'grazziano@trybe.com', password: '12345678', token: 'invalid', groupId: '2' },
      { name: 'usuario1', email: 'usuario1@trybe.com', password: '12345678', token: 'invalid', groupId: '1' },
      { name: 'usuario2', email: 'usuario2@trybe.com', password: '12345678', token: 'invalid', groupId: '2' },
      { name: 'usuario3', email: 'usuario3@trybe.com', password: '12345678', token: 'invalid', groupId: '3' },
      { name: 'usuario4', email: 'usuario4@trybe.com', password: '12345678', token: 'invalid', groupId: '4' },
      { name: 'usuario5', email: 'usuario5@trybe.com', password: '12345678', token: 'invalid', groupId: '1' },
      { name: 'usuario6', email: 'usuario6@trybe.com', password: '12345678', token: 'invalid', groupId: '2' },
      { name: 'usuario7', email: 'usuario7@trybe.com', password: '12345678', token: 'invalid', groupId: '1' },
      { name: 'usuario8', email: 'usuario8@trybe.com', password: '12345678', token: 'invalid', groupId: '1' },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
