
module.exports = function(sequelize, DataTypes) {
  const smallBis = sequelize.define('smallBis', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140],
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactNumber: {
      type: DataTypes.STRING,
      validate: {
        len: [9, 10],
      },
    },
    email: {
      type: DataTypes.STRING,
    },
    website: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
  });
  return smallBis;
};
