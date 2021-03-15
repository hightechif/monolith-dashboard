'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Articles',[
      {
        title: 'Harry Potter',
        body: 'Voldemort kill Dumbledore',
        approved: true,
        read_count: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Tom Sawyer',
        body: 'The adventure of Tom Sawyer',
        approved: true,
        read_count: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
