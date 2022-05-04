'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable('attributes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      typeId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        refereces: {
          model: 'types',
          key: 'id',
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('attributes');
  }
};
