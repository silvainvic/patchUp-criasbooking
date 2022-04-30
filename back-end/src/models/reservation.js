module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define("Reservation", {
    days: { type: DataTypes.INTEGER, allowNull: false },
    reservationDateStart: { type: DataTypes.DATE, allowNull: false },
    reservationDateEnd: { type: DataTypes.DATE, allowNull: false },
    totalPrice: { type: DataTypes.INTEGER, allowNull: false },
  }, {timestaps: false});

  Reservation.associate = (models) => {
    Reservation.belongsTo(models.User, {as: 'user', foreignKey: 'userId',})
    Reservation.belongsTo(models.Room, {as: 'room', foreignKey: 'roomId',})
  }

  return Reservation;
};