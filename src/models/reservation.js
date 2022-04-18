'use strict';

module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define("Reservation", {
    days: { type: DataTypes.INTEGER, allowNull: false },
    reservationDate: { type: DataTypes.DATE, allowNull: false },
    totalPrice: { type: DataTypes.INTEGER, allowNull: false },
  }, {timestaps: false});

  
  models.Room.belongsTo(models.User, {
    as: 'users',
    foreignKey: 'roomId',
  });

  models.User.belongsTo(models.Room, {
    as: 'rooms',
    foreignKey: 'userId',
  });

  return Reservation;
};