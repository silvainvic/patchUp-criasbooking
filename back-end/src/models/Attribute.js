module.exports = (Sequelize, DataTypes) => {
  const Attribute = Sequelize.define('Attribute', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false, tableName: 'attributes' });
  
  return Attribute;
};
