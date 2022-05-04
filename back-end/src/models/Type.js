module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false, tableName: 'types' });

  Type.associate = ({ Location }) => {
    Type.hasMany(Location, { as: 'locations', foreignKey: 'typeId' });
  }

  return Type;
}