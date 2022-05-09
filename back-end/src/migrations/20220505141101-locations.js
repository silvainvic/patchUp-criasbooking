'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('locations', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      stars: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      addressId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'adresses',
          key: 'id',
        }
      },
      userId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('locations');
  }
};
