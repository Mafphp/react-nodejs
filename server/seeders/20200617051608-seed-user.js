'use strict';
const bcrypt = require('bcrypt');
const HASH_SALT = 10;
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const defaultHashPassword = await bcrypt.hash(process.env.DEFAULT_PASSWORD || '123', HASH_SALT)
    return queryInterface.bulkInsert('users', [{
        firstName: 'admin',
        lastName: 'admin',
        username: 'admin',
        password: defaultHashPassword,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
    }, {
        firstName: 'alireza',
        lastName: 'ashtari',
        username: 'ar.ashtari',
        password: defaultHashPassword,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }, {
        firstName: 'mohammadali',
        lastName: 'farhad',
        username: 'fardabara',
        password: defaultHashPassword,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
