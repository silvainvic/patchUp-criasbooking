module.exports = (Sequelize, DataTypes) => {
  const City = Sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false , tableName: 'cities' });

  City.associate = (models) => {
    City.belongsTo(models.State, { as: 'state', foreignKey: 'stateId' });
    City.hasMany(models.Address, { as: 'adresses', foreignKey: 'cityId' });
  };

  return City;
};
