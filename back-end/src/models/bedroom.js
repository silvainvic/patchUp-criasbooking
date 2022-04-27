'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bedroom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bedroom.init({
    qtDoubleBed: DataTypes.INTEGER,
    qtSingleBed: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bedroom',
  });
  return Bedroom;
};