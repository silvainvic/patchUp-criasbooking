module.exports = (sequelize, DataTypes) => {
  const Hotel = sequelize.define("Hotel", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    district: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false });
  
  Hotel.associate = ({ User }) => {
    Hotel.belongsTo(User, {
      as: 'user',
      foreignKey: 'userId',
    });
  }

  return Hotel;
};