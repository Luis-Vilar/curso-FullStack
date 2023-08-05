"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "permissionsRoles",
      {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        permissionId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "permissions", key: "id" },
        },
        roleId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: "roles", key: "id" },
        },
        createdAt: { type: Sequelize.DATE, allowNull: false },
        updatedAt: { type: Sequelize.DATE, allowNull: false },
        deletedAt: { type: Sequelize.DATE, allowNull: true },
      },
      {
        paranoid: true,
        underscored: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("permissionsRoles");
  },
};
