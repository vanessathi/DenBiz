'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('smallbusinesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
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
      city: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
        validate: {
          len: [1, 200],
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('smallbusinesses');
  },
};
