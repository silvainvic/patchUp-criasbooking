module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("State", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false });

  State.associate = (models) => {
    State.hasMany(models.City, { foreignKey: 'stateId', as: 'cities' });
  };
};