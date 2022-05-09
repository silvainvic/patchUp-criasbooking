module.exports = (Sequelize, DataTypes) => {
  const Address = Sequelize.define('Address', {
    district: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    street: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    number: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    complement: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    cep: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, { timestamps: false, tableName: 'adresses'});

  Address.associate = (models) => {
      Address.belongsTo(models.City, { as: 'city', foreignKey: 'cityId' });
      Address.hasOne(models.Location, { as: 'location', foreignKey: 'addressId' });
  };

  return Address;
}