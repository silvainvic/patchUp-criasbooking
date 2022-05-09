module.exports = (Sequelize, DataTypes) => {
  const Location = Sequelize.define('Location', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    stars: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, { timestamps: false, tableName: 'locations' });

  Location.associate = (models) => {
    Location.belongsTo(models.Address, { as: 'address', foreignKey: 'addressId' });
    Location.belongsTo(models.User, { as: 'user', foreignKey: 'userId' });
    Location.hasMany(models.Product, { as: 'products', foreignKey: 'locationId' });
  }

  return Location;
}