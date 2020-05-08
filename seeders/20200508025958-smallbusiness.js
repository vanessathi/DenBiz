'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('smallBis', [{
      name: 'Atomic Cowboy',
      address: '1515 Adams St.',
      contactNumber: '3033777900',
      email: 'atomicpizza@gmail.com',
      website: 'https://atomiccowboy.net/',
      category: 'Restaurant',
      city: 'Denver',
      description: 'Local Denver Pizza Joint',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('smallBis', [{
      name: 'Atomic Cowboy',
    }]);
  },
};
