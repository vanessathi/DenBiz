
module.exports = function(sequelize, DataTypes) {
  const smallBis = sequelize.define('smallBis', {
    text: {
      name: DataTypes.String,
      allowNull: false,
      validate: {
        len: [1, 140],
      },
    },
    address: {
      name: DataTypes.String,
      allowNull: false,
    },
    contactNumber: {
      name: DataTypes.String,
      validate: {
        len: [9, 10],
      },
    },
    email: {
      name: DataTypes.String,
    },
    website: {
      name: DataTypes.String,
    },
    type: {
      name: DataTypes.String,
    },
  });
  return smallBis;
};
