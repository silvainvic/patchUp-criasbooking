'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hotels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      categoryStars: {
        type: Sequelize.STRING
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};