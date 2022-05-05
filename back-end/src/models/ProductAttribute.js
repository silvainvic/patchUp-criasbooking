module.exports = (Sequelize, Datatypes) => {
  const ProductAttribute = Sequelize.define('ProductAttribute', {});

  ProductAttribute.associate = (models) => {
    models.Product.belongsToMany(models.Attribute, {
      as: 'attributes',
      through: 'product_attributes',
      foreignKey: 'productId',
      otherKey: 'attributeId',
    });

    models.Attribute.belongsToMany(models.Product, {
      as: 'products',
      through: 'product_attributes',
      foreignKey: 'attributeId',
      otherKey: 'productId',
    });
  };

  return ProductAttribute;
};
