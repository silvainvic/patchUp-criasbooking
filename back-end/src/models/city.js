module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("City", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  City.associate = (models) => {
    City.hasMany(models.Hotel, { foreignKey: 'cityId', as: 'hotels' });
    City.belongsTo(models.State, { foreignKey: 'stateId', as: 'state',});
  };
};