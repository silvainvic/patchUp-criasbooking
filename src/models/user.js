'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
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
  }, { timestamps: false});

  User.associate = (models) => {
    User.hasMany(models.Reservation,
      { foreignKey: 'reservationId', as: 'reservations' });
  };
  return User;
};

