
module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define("Hotel", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryStar: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Hotel.associate = (models) => {
    // Hotel.hasMany(models.Room, { foreignKey: 'hotelId', as: 'rooms' });
    Hotel.belongsTo(models.City, { foreignKey: 'cityId', as: 'city',});
  };
};