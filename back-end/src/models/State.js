module.exports = (Sequelize, DataTypes) => {
  const State = Sequelize.define('State', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    }
  }, { timestamps: false, tableName: 'states'});

  State.associate = (models) => {
      State.hasMany(models.City, { as: 'cities', foreignKey: 'stateId' });
  };

  return State;
}