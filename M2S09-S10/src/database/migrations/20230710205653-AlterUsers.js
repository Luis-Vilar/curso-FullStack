'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'createdAt', {
      type: Sequelize.DATE,
      allowNull: true
    })
    await queryInterface.addColumn('users', 'updatedAt', {
      type: Sequelize.DATE,
      allowNull: true
    })
    await queryInterface.addColumn('users', 'deletedAt', {
      type: Sequelize.DATE,
      allowNull: true
    })
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'deletedAt')
    await queryInterface.removeColumn('users', 'updatedAt')
    await queryInterface.removeColumn('users', 'createdAt')

  }
};

