module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define("Reservation", {
    days: { type: DataTypes.INTEGER, allowNull: false },
    reservationDate: { type: DataTypes.DATE, allowNull: false },
    totalPrice: { type: DataTypes.INTEGER, allowNull: false },
  }, {timestaps: false});

  Reservation.associate = (models) => {
    Reservation.belongsTo(models.User, {as: 'user', foreignKey: 'userId',})
  }
  Reservation.associate = (models) => {
    Reservation.belongsTo(models.Room, {as: 'rooms', foreignKey: 'roomId',})
  }

  return Reservation;
};