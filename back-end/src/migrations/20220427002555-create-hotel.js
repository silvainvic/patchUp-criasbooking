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
        type: Sequelize.STRING,
        notNull: false,
      },
      stars: {
        type: Sequelize.STRING,
        notNull: false,
      },
      state: {
        type: Sequelize.STRING,
        notNull: false,
      },
      city: {
        type: Sequelize.STRING,
        notNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hotels');
  }
};