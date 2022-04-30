module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define("Room", {
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qtDoubleBed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    qtSingleBed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dailyPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestaps: false });
 
  Room.associate = (models) => {
    Room.hasMany(models.Reservation, { foreignKey: 'roomId', as: 'reservations' });
    Room.belongsTo(models.Hotel, { foreignKey: 'hotelId', as: 'hotel',});
  };

  return Room
}