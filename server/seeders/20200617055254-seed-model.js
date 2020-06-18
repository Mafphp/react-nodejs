'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('models', [{
      name: 'Toyota Yaris',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      name: 'Honda Civic',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      name: 'Honda Civic Si',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      name: 'Mazda 3',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      name: 'Honda Accord',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      name: 'Volkswagen Jetta GLI',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      name: 'Hyundai Sonata',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('models', null, {});
  }
};
