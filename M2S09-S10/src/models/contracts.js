const connection = require("../database/connection");
const { STRING, DATE, INTEGER } = require("sequelize");
const Trainee = require("./trainee.js");
const Categorie = require("./category.js");
const Company = require("./companies.js");
const Contract = connection.define(
  "contracts",
  {
    id: {
      type: INTEGER,
      primaryKey: true,
    },
    trainee_id: {
      type: INTEGER,
      allowNull: false,
      references: { model: "trainees", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    category_id: INTEGER,
    company_id: INTEGER,
    start_validity: DATE,
    end_validity: DATE,
    status: STRING,
    remuneration: INTEGER,
    extra: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  },
  {
    underscored: true,
    paranoid: true,
  }
);
Contract.belongsTo(Trainee, {
  foreignKey: "trainee_id",
  as: "trainee",
});
Contract.belongsTo(Categorie, {
  foreignKey: "category_id",
  as: "category",
});
Contract.belongsTo(Company, {
  foreignKey: "company_id",
  as: "company",
});

module.exports = Contract;
