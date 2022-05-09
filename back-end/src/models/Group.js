module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
    tableName: 'groups'
  });

  Group.associate = ({ User }) => {
    Group.hasMany(User, { as: 'users', foreignKey: 'groupId' });
  }

  return Group;
}