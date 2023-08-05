"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("categories", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("categories");
  },
};

// ejecutar en terminal para crear la tabla en la base de datos
//  npx sequelize db:migrate

/**
 * cria uma migration
 * npx sequelize-cli migration:generate --name nomequalquer
 *
 * cria a tabela na base de dados
 * npx sequelize db:migrate
 *
 * cria um model com os atributos passados
 * npx sequelize-cli model:generate --name Trainee --attributes name:string,created_at:date,updated_at:date
 */
