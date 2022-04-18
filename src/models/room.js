'use strict';

module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestaps: false });
  
  Room.associate = (models) => {
    Room.hasMany(models.Reservations,
      { foreignKey: 'roomId', as: 'reservations' });
  }

  return Room
}