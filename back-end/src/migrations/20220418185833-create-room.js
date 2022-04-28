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
        type: Sequelize.STRING
      },
      qtDoubleBed: {
        type: Sequelize.INTEGER
      },
      qtSingleBed: {
        type: Sequelize.INTEGER
      },
      dailyPrice: {
        type: Sequelize.INTEGER
      },
      hotelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};