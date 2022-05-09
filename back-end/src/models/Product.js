module.exports = (Sequelize, DataTypes) => {
  const Product = Sequelize.define('Product', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, { timestamps: false, tableName: 'products' });

  Product.associate = (models) => {
    Product.belongsTo(models.Location, { as: 'location', foreignKey: 'locationId' });
  };

  return Product;
}