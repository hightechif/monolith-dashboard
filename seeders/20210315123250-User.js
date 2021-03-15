'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',[
      {
        username: 'admin',
        password: bcrypt.hashSync('admin', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'binar',
        password: bcrypt.hashSync('binar', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Users', null, {});
  }
};
