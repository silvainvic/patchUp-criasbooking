module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, { timestamps: false, tableName: 'users' });

  User.associate = ({ Group }) => {
    User.belongsTo(Group, { as: 'group', foreignKey: 'groupId' });
    //User.hasMany(Location, { as: 'locations', foreignKey: 'userId' });
  }

  return User;
}