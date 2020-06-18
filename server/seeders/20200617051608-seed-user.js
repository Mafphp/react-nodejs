'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        firstName: 'admin',
        lastName: 'admin',
        username: 'admin',
        password: '123',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    }, {
        firstName: 'alireza',
        lastName: 'ashtari',
        username: 'ar.ashtari',
        password: '123',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        firstName: 'mohammadali',
        lastName: 'farhad',
        username: 'fardabara',
        password: '123',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
