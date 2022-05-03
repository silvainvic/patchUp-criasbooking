'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      qtDoubleBed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      qtSingleBed: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      dailyPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hotelId: {
        type: Sequelize.INTEGER,
        references: { model: 'Hotels', key: 'id' }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};